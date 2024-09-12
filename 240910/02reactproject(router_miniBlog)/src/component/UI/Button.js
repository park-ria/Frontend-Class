import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

// 구조분해할당으로 MainPage에서 값 가져오기
const Button = ({title, onClick}) => {
  
  return (
    <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
  )
}

export default Button;