import React, { useState, useMemo, useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const CountWrapper = styled.div`
  & * {
    font-size: 14px;
  }
`;

const Searchbar = styled.input`
  width: 100%;
  margin: 20px 0;
  padding: 15px 0;
  padding-left: 15px;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-accent);
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoList = () => {
  const { todo = [] } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div>
      <CountWrapper>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 개수 : {doneCount}</div>
        <div>남은 개수 : {notDoneCount}</div>
      </CountWrapper>
      <Searchbar
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <ListWrapper>
        {getSearchResult().map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default TodoList;
