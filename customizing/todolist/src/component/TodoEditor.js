import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../App";

const Editor = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 15px;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border: 1px solid var(--color-accent);
  }
`;

const Button = styled.button`
  width: 80px;
  border: 1px solid transparent;
  border-radius: 5px;
  background: var(--color-accent);
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border: 1px solid var(--color-accent);
    background: #fff;
    color: var(--color-accent);
  }
`;

const TodoEditor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  const onSubmit = () => {
    if (!content) {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div>
      <Editor>
        <Input
          ref={contentRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="할 일을 작성해주세요"
        />
        <Button onClick={onSubmit}>추가</Button>
      </Editor>
    </div>
  );
};

export default TodoEditor;
