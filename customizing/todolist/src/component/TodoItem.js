import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../App";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #f0f0f0;
`;

const Checkbox = styled.div`
  width: 20px;
`;

const ContentCol = styled.div`
  flex: 1;
`;

const DateCol = styled.div`
  font-size: 14px;
  color: gray;
`;

const Button = styled.button`
  background: transparent;
  font-size: 14px;
  font-weight: bold;
  color: lightgray;
  border: none;
  padding: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--color-accent);
  }
`;

const TodoItem = ({ id, isDone, content, createDate }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <Wrapper>
      <Checkbox>
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </Checkbox>
      <ContentCol>{content}</ContentCol>
      <DateCol>{new Date(createDate).toLocaleDateString()}</DateCol>
      <div onClick={onClickDelete}>
        <Button>X</Button>
      </div>
    </Wrapper>
  );
};

export default React.memo(TodoItem);
