//import React, { useState, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";
// import Chart from "./Chart";
// import Price from "./Price";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const OverView = styled.div`
  width: 600px;
  color: ${(props) => props.theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: ${(props) => props.theme.textColor};
  border-radius: 8px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Description = styled.div`
  width: 600px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${(props) => props.theme.accentColor};
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.accentColor};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  padding: 8px 0;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.accentColor};
  }
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

interface IsActive {
  isActive: boolean;
}

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  // console.log(priceMatch);
  // console.log(chartMatch);

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();

  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();

  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);

  //isLoading: infoLoading는 isLoading으로 값을 찾아와서 이름을 infoLoading 바꿔 줌
  const { isLoading: infoLoading, data: CoinInterface } =
    useQuery<CoinInterface>({
      queryKey: ["info", coinId],
      queryFn: () => fetchCoinInfo(coinId), // 인자값을 보내야 하기때문에 콜백써야 함
    });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinPrice(coinId), // 인자값을 보내야 하기때문에 콜백써야 함
    //refetchInterval: 5000, // 5초에 한번 씩 업데이트 됨
  });

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state ? state : loading ? "Loading..." : CoinInterface?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state ? state : loading ? "Loading..." : CoinInterface?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <OverView>
            <OverviewItem>
              <span>Rank : </span>
              <span>{CoinInterface?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol: </span>
              <span>{CoinInterface?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source : </span>
              <span>{CoinInterface?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </OverView>
          <Description>
            📖Information of coin type : {CoinInterface?.type}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit atque explicabo quas culpa nisi quaerat delectus
            fugiat id a at molestias vel numquam sint eius, quis aliquam
            temporibus non quam. Neque rerum voluptatum vitae eos necessitatibus
            blanditiis fugit? Reprehenderit commodi, at odio soluta eaque qui
            atque! Fugit soluta sed illum perspiciatis omnis. Ipsum vitae
            architecto odio exercitationem quod, voluptatem nemo.
          </Description>
          <OverView>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
          </OverView>
          <OverView>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </OverView>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
