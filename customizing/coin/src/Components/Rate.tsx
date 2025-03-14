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
`;

const Desc = styled.span<{ $isBlue: boolean }>`
  font-size: 30px;
  font-weight: 600;
  color: ${({ $isBlue }) => ($isBlue ? "#332ae9" : "#e81313")};
`;

type RateProps = {
  time: string;
  value: number;
};

const Rate = ({ time, value }: RateProps) => {
  const [isBlue, setIsBlue] = useState(false);
  useEffect(() => {
    setIsBlue(value.toString().slice(0, 1) === "-");
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
      <Desc $isBlue={isBlue}>
        <FontAwesomeIcon
          icon={isBlue ? faCaretDown : faCaretUp}
          style={{ marginRight: "10px" }}
        />
        {isBlue ? "" : "+"}
        {value}%
      </Desc>
    </Wrapper>
  );
};

export default Rate;
