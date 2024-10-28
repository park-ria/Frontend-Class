import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { ToDoListContextProvider } from "./contexts/ToDoContext";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const App = () => {
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer />
      </ToDoListContextProvider>
    </Container>
  );
};

export default App;
