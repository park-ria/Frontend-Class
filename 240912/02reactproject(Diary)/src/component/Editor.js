import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
//import Button1 from "./Button1";
import EmotionItem from "./EmotionItem";
import { getFormattedDate, emotionList } from "../util";

const EditorSection = styled.div`
  margin-bottom: 40px;
  * h4 {
    font-size: 22px;
  }
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  width: 93%;
  min-height: 200px;
  resize: none;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

const Buttongroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });

  // Editor는 New이거나 Edit일 때 쓰는데 initDate는 기 작성된 일기임.. 기 작성된 일기를 불러와서 오늘 날짜로 바꿔줘야 하므로 initDate가 업데이트 됐을 때 useEffect 씀
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    onSubmit(state);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        <div>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>
        <Emotiongroup>
          {/* {emotionList.map((it) => (
            <img key={it.id} src={it.img} alt={it.name} />
          ))} */}
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <div>
          <Textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </EditorSection>
      <EditorSection>
        <Buttongroup>
          <Button text={"취소하기"} onClick={handleGoBack} />
          <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
        </Buttongroup>
      </EditorSection>
    </div>
  );
};

export default Editor;
