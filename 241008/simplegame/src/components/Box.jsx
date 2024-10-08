import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: 400px;
  border: 1px solid #000;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Result = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "tie") {
    result = result === "" ? "" : "win" ? "lose" : "win";
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Img src={item && item.img} alt={title} />
      <Result>{result}</Result>
    </Wrapper>
  );
};

export default Box;
