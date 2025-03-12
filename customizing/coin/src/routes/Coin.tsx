import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";
import Chart from "./Chart";
import CandleChart from "./CandleChart";
import { fetchCoinHistory } from "../api";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 1290px;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  //border: 1px solid #f00;
  &:first-child {
    width: 60%;
  }
  &:last-child {
    width: 40%;
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;

const Rank = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 12px;
  color: #222;
  background: #f9f9f9;
  h3 {
    font-size: 30px;
  }
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 30px;
  font-weight: 600;
  img {
    width: 30px;
    height: 30px;
  }
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

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

export interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Coin = () => {
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();

  const { isLoading: infoLoading, data: coinInfo } = useQuery<CoinInterface>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId), // 인자값을 보내야 하기때문에 콜백써야 함
  });
  //console.log(coinInfo);

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinPrice(coinId), // 인자값을 보내야 하기때문에 콜백써야 함
    //refetchInterval: 60000, // 60초에 한번 씩 업데이트 됨
  });
  //console.log(priceData);

  const { isLoading: chartLoading, data: chartData } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    //refetchInterval: 60000, // 60초에 한번 씩 업데이트 됨
  });

  const loading = infoLoading || priceLoading || chartLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state ? state : loading ? "Coin Ranking" : coinInfo?.name}
        </title>
      </Helmet>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <div>
          <TitleSection>
            <Rank>
              Rank
              <h3>{coinInfo?.rank}</h3>
            </Rank>
            <Title>
              <img
                src={`https://static.coinpaprika.com/coin/${coinInfo?.id}/logo.png`}
              />
              {coinInfo?.name}
            </Title>
          </TitleSection>
          <Wrapper>
            <Section>
              <CandleChart chartData={chartData ?? []} />
            </Section>
            <Section>
              <Chart chartData={chartData ?? []} />
            </Section>
          </Wrapper>
        </div>
      )}
    </Container>
  );
};

export default Coin;
