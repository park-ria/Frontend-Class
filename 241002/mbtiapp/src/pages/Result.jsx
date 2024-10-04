import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";

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
    border: 4px solid darkkhaki;
  }
`;

const Desc = styled.div`
  width: 80%;
  margin: 10px 0;
  padding: 8px 14px;
  font-size: 20px;
  text-align: center;
  background: darkkhaki;
  color: #fff;
  border-radius: 8px;
  strong {
    margin-left: 10px;
    background: cornflowerblue;
  }
`;

const DescText = styled.div`
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img className="rounded-circle" src={resultData.image} />
        </LogoImg>
        <Desc>
          ⭐예비집사님과 찰떡궁합인 😻고양이는
          <strong>
            {resultData.best}형 {resultData.name}
          </strong>
          입니다.
          <br />
          <DescText>{resultData.desc}</DescText>
        </Desc>

        <ButtonGroup>
          <Button variant="danger" onClick={handleClickButton}>
            테스트 다시 시작하기
          </Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
