import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
  console.log(`${id} TodoItem 업데이터`);

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
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
// 부모 컴포넌트가 업데이트가 되면 업데이트가 안된 item들도 같이 리렌더링이 됨
// 그러나 TodoItem은 부모로 부터 onUpdate랑 onDelete의 함수를 받으므로.. 부모 컴포넌트(App.js)가 변경될 때마다 같이 렌더링 됨. 그래서 onUpdate와 onDelete에 useCallback을 써서 TodoItem의 불필요한 리렌더링을 막을 수 있음
