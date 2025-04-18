import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.main`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 420px;
  margin: 30px 0 50px;
  position: relative;
  background: #000;
  &::before {
    content: "";
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.accentColor},
      rgba(0, 0, 0, 0)
    );
  }
`;

const BannerDesc = styled.div`
  width: 1290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1350px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #ccc;
  @media screen and (max-width: 550px) {
    gap: 50px;
  }
`;

const TopText = styled.div`
  font-size: 50px;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`;

const UnderRow = styled.div`
  display: flex;
  align-items: flex-end;
  & > span:last-child {
    line-height: 80px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    & > span:last-child {
      line-height: 50px;
    }
  }
  @media screen and (max-width: 550px) {
    & > span:last-child {
      line-height: 40px;
    }
  }
`;

const Strong = styled.span`
  padding-right: 20px;
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  @media screen and (max-width: 550px) {
    font-size: 50px;
  }
`;

const BottomText = styled.div`
  font-size: 16px;
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const BannerImg = styled.span`
  display: inline-block;
  width: 402px;
  height: 245px;
  background: url("trophy.png") center/contain no-repeat;
  @media screen and (max-width: 1350px) {
    width: auto;
    flex: 1;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const Content = styled.div`
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
    width: 30%;
  }

  @media screen and (max-width: 1350px) {
    &:first-child {
      padding-left: 0;
    }
  }
  @media screen and (max-width: 850px) {
    &:last-child {
      width: 100%;
    }
  }
`;

const CoinList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 160px);
  grid-gap: 30px;
  justify-content: space-evenly;
  position: relative;

  @media screen and (max-width: 600px) {
    height: auto;
    grid-template-columns: repeat(2, 160px);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SubTitle = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
`;

const CoinBox = styled.li`
  width: 160px;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: 1350px) {
    width: auto;
  }
`;

const Rank = styled.div`
  width: 30px;
  text-align: right;
  color: ${({ theme }) => theme.textColor};
  font-size: 30px;

  &.topRank {
    font-size: 50px;
    font-weight: 500;
    line-height: 50px;
  }

  &.one {
    position: relative;
  }
`;

const Coin = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.cardBgColor};
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
      width: 50px;
      height: 50px;
    }
  }
`;

const Crown = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  background: url("crown.png") center/cover no-repeat;
  position: absolute;
  top: -30px;
  left: -5px;
  transform: rotate(350deg);
`;

const CoinList100 = styled.div`
  height: 420px;
  padding: 0px 0px 30px 20px;
  border-radius: 10px;
  position: relative;
  background: ${({ theme }) => theme.cardBgColor};
  color: #222;

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
  }

  @media screen and (max-width: 1050px) and (min-width: 851px) {
    & > label {
      min-width: 60px;
    }
  }
`;

const CoinTable = styled.div`
  height: 310px;
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
        transition: color 0.3s;

        &:first-child {
          padding: 0 10px;
        }

        &:hover {
          color: ${({ theme }) => theme.accentColor};
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

const CoinName = styled.span`
  //width: 140px;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Loader = styled.span`
  margin: 0 auto;
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
        <>
          <Banner>
            <BannerDesc>
              <BannerText>
                <TopText>
                  <span>What is the</span>
                  <UnderRow>
                    <Strong>Hottest Coin</Strong>
                    <span>right now?</span>
                  </UnderRow>
                </TopText>
                <BottomText>
                  All the hottest coins these days, all gathered here!
                  <br />
                  Check out the TOP100 coin rankings!
                  <br />
                  You can see the coin's volatility in real time right now
                </BottomText>
              </BannerText>
              <BannerImg />
            </BannerDesc>
          </Banner>
          <Content>
            <Section>
              <div>
                <SubTitle>Top 9</SubTitle>
                <CoinList>
                  {data?.slice(0, 9).map((coin, index) => (
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
              </div>
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
                            <CoinName>{coin.name}</CoinName>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </CoinContents100>
                </CoinTable>
              </CoinList100>
            </Section>
          </Content>
        </>
      )}
    </Container>
  );
};

export default Coins;
