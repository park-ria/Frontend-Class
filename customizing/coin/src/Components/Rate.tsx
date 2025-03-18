import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  border-radius: 10px;
  background: #fdfcfc;
  box-shadow: 1px 1px 2px #aaa;
  color: #222;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Desc = styled.span<{ $signColor: string }>`
  font-size: 30px;
  font-weight: 600;
  color: ${({ $signColor }) =>
    $signColor === "blue"
      ? "#332ae9"
      : $signColor === "red"
      ? "#e81313"
      : "#222"};
  & > svg {
    margin-right: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    & > svg {
      margin-right: 10px;
    }
  }
`;

type RateProps = {
  time: string;
  value: number;
};

const Rate = ({ time, value }: RateProps) => {
  const [signColor, setsignColor] = useState("black");
  useEffect(() => {
    setsignColor(value < 0 ? "blue" : value > 0 ? "red" : "black");
  }, []);

  return (
    <Wrapper>
      from {time}
      {time.slice(-1) === "m"
        ? "inute"
        : time.slice(-1) === "h"
        ? "our"
        : time.slice(-1) === "d"
        ? "ay"
        : "ear"}
      {Number(time.slice(0, 1)) > 1 ? "s" : ""}
      <Desc $signColor={signColor}>
        {signColor !== "black" && (
          <FontAwesomeIcon
            icon={signColor === "blue" ? faCaretDown : faCaretUp}
          />
        )}
        {signColor ? "" : "+"}
        {value} %
      </Desc>
    </Wrapper>
  );
};

export default Rate;
