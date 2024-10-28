import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li{
    list-style:none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App1 = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    // HTMLInputElement는 target에 대한 타입이 정의 되어있지 않아서 타입이 정의 된 currentTarget만 됨
  };
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title>Hello World!</Title>
        <form>
          <input
            onChange={onChange}
            value={value}
            type="text"
            placeholder="username"
          />
        </form>
      </Container>
    </div>
  );
};

export default App1;
