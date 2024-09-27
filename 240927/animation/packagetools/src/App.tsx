import { motion } from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};
// 외부로 객체화 해서 motion animation의 속성 값을 넣을 때, transition의 경우는 독립화 시킬수 없어서 animate에 넣어서 해야함

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* <Box transition={{ duration: 3 }} animate={{ borderRadius: "100px" }} />
        <motion.div></motion.div> */}

        {/* <Box
          transition={{ duration: 3, type: "spring", mess: 10, delay: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        /> */}
        {/* damping은 spring을 잡아줌 damping이 0이라는 건 무중력 정신없게 spring이 너무 튐, 원래 기본적으로 10을 줌.. */}
        {/* mass는 무게를 의미, 가벼울 수록 스프링이 많이 튐 */}
        {/* 3초의 시간동안 0에서 100 크기로 */}

        <Box variants={myVars} initial="start" animate="end" />
      </Wrapper>
    </>
  );
}

export default App;
