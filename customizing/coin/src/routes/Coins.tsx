import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1290px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 1350px) {
    width: 100%;
    padding: 0 20px;
    gap: 20px;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Section = styled.div`
  &:first-child {
    flex: 1;
  }
  &:last-child {
    width: 28%;
  }

  @media screen and (max-width: 1350px) {
    &:first-child {
      flex: 2;
      padding-left: 0;
    }
    &:last-child {
      flex: 1;
      width: auto;
    }
  }
`;

const CoinList = styled.ul`
  height: calc(100vh - 200px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  justify-items: center;
  padding: 50px 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 1050px) {
    grid-gap: 30px;
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
  border: 1px solid ${({ theme }) => theme.borderColor};
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
  @media screen and (max-width: 1350px) {
    width: auto;
  }
`;

const Rank = styled.div`
  width: 50px;
  text-align: right;
  color: ${({ theme }) => theme.textColor};
  font-size: 30px;

  &.topRank {
    font-size: 100px;
    line-height: 90px;
  }

  &.one {
    position: relative;
  }

  @media screen and (max-width: 1350px) {
    &.topRank {
      font-size: 80px;
      line-height: 70px;
    }
  }
  @media screen and (max-width: 1050px) {
    width: 30px;
    font-size: 26px;
    &.topRank {
      font-size: 50px;
      line-height: 50px;
    }
  }
`;

const Coin = styled.div`
  width: 120px;
  height: 120px;
  background: #fff;
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

  @media screen and (max-width: 1350px) {
    width: 100px;
    height: 100px;
    font-size: 14px;
    a {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
    a {
      img {
        width: 30px;
        height: 30px;
      }
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

  @media screen and (max-width: 1350px) {
    top: -30px;
  }
  @media screen and (max-width: 1050px) {
    left: -10px;
  }
`;

const CoinList100 = styled.div`
  height: calc(100vh - 200px);
  padding: 50px 0px 30px 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  position: relative;
  background: ${({ theme }) => theme.cardBgColor};

  @media screen and (max-width: 850px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 850px) {
    padding-left: 24px;
  }
`;

const CoinLabels = styled.div`
  margin-bottom: 20px;

  & > label {
    display: inline-block;
    min-width: 80px;
    font-size: 18px;
    color: ${({ theme }) => theme.textColor};
  }

  @media screen and (max-width: 1050px) and (min-width: 851px) {
    & > label {
      min-width: 60px;
    }
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
    background-color: ${({ theme }) => theme.borderColor};
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

  @media screen and (max-width: 1050px) and (min-width: 851px) {
    li {
      & > a {
        & > span {
          min-width: 50px;
        }
      }
    }
  }
`;

const Loader = styled.span`
  margin-top: 50px;
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
