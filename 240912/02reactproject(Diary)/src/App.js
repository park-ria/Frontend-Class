import React, { useReducer, useRef, useEffect, useState } from "react";
//import { Routes, Route, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const Wrapper = styled.div`
  padding: 20px;
  height: 100vh;
  /* background: var(--primary-color); */
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (it) => String(it.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};

// 데이터를 자식에게 보냄
export const DiaryStateContext = React.createContext();
// 함수만 따로 모아서 보냄 : 한꺼번에 보내면 4개중 하나가 업데이트 되면 모두 리렌더링 되는걸 막기 위해
export const DiaryDispatchContext = React.createContext();

// Link는 스크립트의 a태그
const App = () => {
  const [isDateLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  // state는 useState에 의해서 값이 변하지만 useRef는 렌더링과 별개로 고정값
  useEffect(() => {
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    // 처음엔 최신순으로 정렬 되기때문에
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    // 최신순은 내림차순이여서 0번째 id가 가장 최신꺼라서
    idRef.current = localData[0].id + 1;
    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []); // []빈 배열이면 최초 한번만

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date().getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDateLoaded) {
    return <div>데이터를 불러오는 중입니다!</div>;
  } else {
    return (
      <>
        <GlobalStyles />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
              {/* <div>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/new"}>New</Link>
                  <Link to={"/diary"}>Diary</Link>
                  <Link to={"/edit"}>Edit</Link>
                </div> */}
            </Wrapper>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
    );
  }
};

export default App;
