import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atoms";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 1290px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: "Raleway", sans-serif;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
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
`;

const Wrapper = styled.div`
  width: 1290px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Section = styled.div`
  &:first-child {
    width: 60%;
  }
  &:last-child {
    width: 25%;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  background: #ddd;
`;

const SubTitle = styled.span`
  display: inline-block;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;

const CoinList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 50px;
  justify-content: space-around;
`;

const CoinBox = styled.li`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Rank = styled.div`
  color: #b5b5b5;
  font-size: 30px;

  &.topRank {
    color: ${({ theme }) => theme.textColor};
    font-size: 100px;
    line-height: 90px;
  }
`;

const Coin = styled.div`
  width: 140px;
  height: 140px;
  background: #f6f6f6;
  color: #222;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #8e8e8e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: inherit;
    text-align: center;
    transition: color 0.3s;
    margin: 0 20px;

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

const CoinList100 = styled.div`
  margin-left: 10px;
  height: calc(100vh - 220px);
  overflow-y: scroll;
`;

const CoinLabels = styled.div`
  margin-bottom: 20px;

  & > label {
    display: inline-block;
    min-width: 80px;
    font-size: 18px;
    color: ${({ theme }) => theme.textColor};
  }
`;

const CoinContents100 = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }

    & > span {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 80px;
      color: ${({ theme }) => theme.textColor};

      &:first-child {
        padding: 0 15px;
      }

      & > img {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  logo: string;
  first_data_at: string;
  last_data_at: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  console.log(data);
  return (
    <Container>
      <Helmet>
        <title>COIN RANKING</title>
      </Helmet>
      <Header>
        <Title>COIN RANKING</Title>
        <DarkBtn onClick={() => setIsDark((prev) => !prev)}>
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </DarkBtn>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <Wrapper>
          <Section>
            <SubTitle>Top 12</SubTitle>
            <CoinList>
              {data?.slice(0, 12).map((coin, index) => (
                <CoinBox key={coin.id}>
                  <Rank className={coin.rank <= 3 ? "topRank" : ""}>
                    {coin.rank}
                  </Rank>
                  <Coin>
                    <Link to={`/${coin.id}`} state={`${coin.name}`}>
                      <img
                        src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                      />
                      {coin.name}
                    </Link>
                  </Coin>
                </CoinBox>
              ))}
            </CoinList>
          </Section>
          <Line></Line>
          <Section>
            <SubTitle>Top 100</SubTitle>
            <CoinList100>
              <CoinLabels>
                <label>Rank</label>
                <label>Name</label>
              </CoinLabels>
              <CoinContents100>
                {data?.map((coin) => (
                  <li key={coin.id}>
                    <span>{coin.rank}</span>
                    <span>
                      <img
                        src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                      />
                      {coin.name}
                    </span>
                  </li>
                ))}
              </CoinContents100>
            </CoinList100>
          </Section>
        </Wrapper>
      )}
    </Container>
  );
};

export default Coins;
