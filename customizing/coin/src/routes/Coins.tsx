import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1290px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Section = styled.div`
  &:first-child {
    width: 70%;
    padding-left: 25px;
  }
  &:last-child {
    width: 25%;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  background: var(--border-color);
`;

const CoinList = styled.ul`
  height: calc(100vh - 200px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 50px;
  justify-content: space-around;
  padding: 50px 50px 50px 20px;
  border: 1px solid var(--border-color);
  border-radius: 15px;
  position: relative;
`;

const SubTitle = styled.span`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.bgColor};
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  top: -20px;
  left: 30px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
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
  color: ${({ theme }) => theme.textColor};
  font-size: 30px;

  &.topRank {
    font-size: 100px;
    line-height: 90px;
  }

  &.one {
    position: relative;
  }
`;

const Coin = styled.div`
  width: 120px;
  height: 120px;
  background: #f9f9f9;
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

    img {
      width: 60px;
      height: 60px;
    }
  }
`;

const Crown = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  background: url("crown.png") center/cover no-repeat;
  position: absolute;
  top: -25px;
  left: 5px;
  transform: rotate(350deg);
`;

const CoinList100 = styled.div`
  height: calc(100vh - 200px);
  padding: 50px 0px 30px 20px;
  border: 1px solid var(--border-color);
  border-radius: 15px;
  position: relative;
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

const CoinTable = styled.div`
  height: 96%;
  overflow-y: scroll;
  position: relative;
  scrollbar-gutter: stable both-edges;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b5b5b5;
  }
`;

const CoinContents100 = styled.ul`
  li {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }

    & > a {
      display: flex;
      align-items: center;

      & > span {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 80px;
        color: ${({ theme }) => theme.textColor};

        &:first-child {
          padding: 0 10px;
        }

        &:hover {
          color: ${({ theme }) => theme.accentColor};
          font-size: 18px;
        }

        & > img {
          width: 25px;
          height: 25px;
        }
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

  return (
    <Container>
      <Helmet>
        <title>COIN RANKING</title>
      </Helmet>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Wrapper>
          <Section>
            <CoinList>
              <SubTitle>Top 12</SubTitle>
              {data?.slice(0, 12).map((coin, index) => (
                <CoinBox key={coin.id}>
                  <Rank
                    className={
                      coin.rank <= 3
                        ? index === 0
                          ? "topRank one"
                          : "topRank"
                        : ""
                    }
                  >
                    {index === 0 ? <Crown /> : ""}
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
            <CoinList100>
              <SubTitle>Top 100</SubTitle>
              <CoinLabels>
                <label>Rank</label>
                <label>Name</label>
              </CoinLabels>
              <CoinTable>
                <CoinContents100>
                  {data?.map((coin) => (
                    <li key={coin.id}>
                      <Link to={`/${coin.id}`} state={`${coin.name}`}>
                        <span>{coin.rank}</span>
                        <span>
                          <img
                            src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                          />
                          {coin.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </CoinContents100>
              </CoinTable>
            </CoinList100>
          </Section>
        </Wrapper>
      )}
    </Container>
  );
};

export default Coins;
