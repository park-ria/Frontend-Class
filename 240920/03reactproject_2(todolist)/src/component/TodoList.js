import React, { useState, useMemo } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo = [], onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    //console.log("analyzeTodo 함수 호출");
    // 검색어 입력할 때마다 리렌더링이 일어남.. todo가 변경될 때에만 rendering이 일어나도록 useMemo를 씀
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  // 이제 analyzeTodo는 함수가 아닌 useMemo에 담긴 콜백이므로 analyzeTodo()에서 뒤에 ()를 빼야 함

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>Todo List 🎈</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
            {...it}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
