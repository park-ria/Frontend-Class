import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

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
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 30px;
`;

const DarkBtn = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 1290px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 48%;
  border: 1px solid #f00;
`;

const SubTitle = styled.span`
  display: inline-block;
  padding: 10px;
  font-size: 20px;
`;

const CoinList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
`;

const CoinBox = styled.li`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;

const Coin = styled.div`
  width: 140px;
  height: 140px;
  background: #f6f6f6;
  color: #222;
  border-radius: 10px;
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
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 35px;
  height: auto;
  margin: 0 10px;
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

  const setterFn = useSetRecoilState(isDarkAtom);
  console.log(data);
  return (
    <Container>
      <Helmet>
        <title>COIN RANKING</title>
      </Helmet>
      <Header>
        <Title>COIN RANKING</Title>
        <DarkBtn onClick={() => setterFn((prev) => !prev)}>
          <FontAwesomeIcon icon={faMoon} />
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
                  {coin.rank}
                  <Coin>
                    <Link to={`/${coin.id}`} state={`${coin.name}`}>
                      <Img
                        src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                      />
                      {coin.name}
                    </Link>
                  </Coin>
                </CoinBox>
              ))}
            </CoinList>
          </Section>
          <Section></Section>
        </Wrapper>
      )}
    </Container>
  );
};

export default Coins;
