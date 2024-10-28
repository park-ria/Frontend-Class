import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
`;

// const Input = styled.input.attrs({ required: true })`
//   background: tomato;
// `;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background: ${({ bgColor }) => bgColor};
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
// `;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  } to {
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box1 = styled.div`
  width: 200px;
  height: 200px;
  background: skyblue;
  animation: ${rotationAnimation} 1s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    // <div style={{ display: "flex" }}>
    //   <div style={{ background: "tomato", width: 100, height: 100 }}>App1</div>
    //   <div style={{ background: "teal", width: 100, height: 100 }}>App2</div>
    // </div>
    <Container>
      <Title>Hello World!</Title>
      {/* <Box bgColor="tomato" />
      <Circle bgColor="teal" /> */}
      {/* <Btn>Log in</Btn>
      <Btn as="a" href="#">
        Log out
      </Btn> */}
      {/* <Input required="true"></Input> */}
      <Box1>
        <Emoji>🤍</Emoji>
      </Box1>
      <Emoji>💙</Emoji>
    </Container>
  );
};

export default App;
