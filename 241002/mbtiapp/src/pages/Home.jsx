import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #222;
`;

const Header = styled.div`
  font-size: 40px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background: salmon;
    border: none;
    &:hover {
      background: crimson;
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 8px solid darkkhaki;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  padding: 8px 14px;
  font-size: 20px;
  background: darkkhaki;
  color: #fff;
  border-radius: 8px;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img className="rounded-circle" src="/cat/ggompang.jpeg" />
        </LogoImg>
        <Desc>MBTI를 기반으로하는 나랑 잘 맞는 고양이 찾기😺</Desc>
        <Button variant="danger" onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
