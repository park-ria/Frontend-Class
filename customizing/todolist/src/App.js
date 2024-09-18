import React, { useRef, useReducer, useCallback } from "react";
import styled from "styled-components";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

// middelware
export const TodoContext = React.createContext();

const Wrapper = styled.div`
  width: 500px;
  margin: 50px auto 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  position: relative;
`;

const writtenTodo = [
  {
    id: 0,
    isDone: false,
    content: "피그마 작업 완료하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "React.js 복습하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Node.js 공부하기",
    createDate: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    case "DELETE":
      {
        return state.filter((item) => item.id !== action.targetId);
      }
      dafault: return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, writtenTodo);
  const idRef = useRef(3);

  const onCreate = useCallback(
    (content) => {
      dispatch({
        type: "CREATE",
        newItem: {
          id: idRef.current,
          isDone: false,
          content,
          createDate: new Date().getTime(),
        },
      });

      idRef.current += 1;
    },
    [todo]
  );

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <Wrapper>
      <Header />
      <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>
    </Wrapper>
  );
}

export default App;
