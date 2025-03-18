import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const Wrapper = styled.header`
  width: 1290px;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: "Raleway", sans-serif;

  & > a {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media screen and (max-width: 1350px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Back = styled.span`
  display: inline-block;
  font-size: 30px;
  color: var(--border-color);
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const DarkBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.accentColor};
  color: #fff;
  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  & > svg {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const { coinId } = useParams<string>();
  return (
    <Wrapper>
      <Link to={"/"}>
        <Back style={{ display: coinId ? "block" : "none" }}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Back>
        <Title>COIN RANKING</Title>
      </Link>
      <DarkBtn onClick={() => setIsDark((prev) => !prev)}>
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
      </DarkBtn>
    </Wrapper>
  );
};

export default Header;
