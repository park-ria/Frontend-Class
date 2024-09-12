import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../UI/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  // Container 안에 있는 모든 요소를 의미
  & * {
    margin-bottom: 16px;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        {/* 버튼을 클릭했을때 navigate라는 함수를 콜백으로 전달하고 post-write페이지로 넘어가도록 */}
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => navigate(`/post/${item.id}`)}
        />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
