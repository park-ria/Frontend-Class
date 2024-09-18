import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 6px 6px 0 0;
  background: var(--color-accent);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 28px;
  }
`;

const DateSpan = styled.span`
  color: #fff;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>
        <DateSpan>{new Date().toLocaleDateString()}</DateSpan>
      </h1>
    </Wrapper>
  );
};

export default React.memo(Header);
