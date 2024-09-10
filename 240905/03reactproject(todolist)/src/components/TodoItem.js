import React, { useContext } from "react";
import "./TodoItem.css";
import { TodoContext } from "../App";

// const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
const TodoItem = ({ id, isDone, content, createdDate }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col" onClick={onClickDelete}>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
// TodoItem이 고차 함수가 되었지만 값이 신규 입력 되면 App 컴포넌트가 업데이트 되므로 App 아래의 함수들도 리렌더링 됨 그래서 TodoItem이 고차 함수가 되더라도 계속 실행시킴
