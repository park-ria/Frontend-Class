import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";
import Chart from "../Components/Chart";
import CandleChart from "../Components/CandleChart";
import { fetchCoinHistory } from "../api";
import Rate from "../Components/Rate";

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
  gap: 50px;
`;

const Section = styled.div`
  flex: 1;
`;

const Content = styled.div`
  margin-bottom: 30px;
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const SubTitle = styled.span`
  display: inline-block;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 3px 10px 5px;
  background: ${({ theme }) => theme.accentColor};
  color: #fff;
  font-weight: 700;
  border-radius: 6px;
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
    width: 50px;
    height: 50px;
  }
`;

const Info = styled.ul``;

const InfoLine = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }
  & > div {
    flex: 1;
    margin-top: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};

    & > span {
      display: inline-block;
      min-width: 100px;
      padding: 0 0 10px 10px;
      &.highest {
        min-width: 250px;
      }
      &:first-child {
        margin-right: 10px;
        //border-right: 1px solid var(--border-color);
        font-weight: 350;
        color: ${({ theme }) => theme.lightGrayColor};
      }
      &:last-child {
        font-weight: 600;
      }
      & > p {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
`;

const Rates = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 26px;
  grid-column-gap: 30px;
  margin-top: 10px;
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
    staleTime: Infinity, // 무한정 캐싱 (최초 한 번만 요청)
    refetchOnMount: false, // 마운트될 때 다시 요청하지 않음
    refetchOnWindowFocus: false, // 창이 포커스될 때 다시 요청하지 않음
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinPrice(coinId), // 인자값을 보내야 하기때문에 콜백써야 함
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    //refetchInterval: 60000, // 60초에 한번 씩 업데이트 됨
  });
  //console.log(priceData);

  const { isLoading: chartLoading, data: chartData } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    //refetchInterval: 60000, // 60초에 한번 씩 업데이트 됨
  });
  // console.log(chartData);

  const loading = infoLoading || priceLoading || chartLoading;
  const rateArr = ["30m", "1h", "6h", "12h", "24h", "7d", "30d", "1y"];
  const todayPrice = priceData
    ? parseFloat(priceData?.quotes.USD.price.toFixed(2))
    : 0;
  const yesterdayPrice = chartData?.length
    ? parseFloat(chartData[chartData?.length - 2].close)
    : 0;
  const difference = todayPrice - yesterdayPrice;

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
            <span>$ {todayPrice}</span>
            <span>
              {difference > 0 ? "+" : "-"}
              {difference.toFixed(2)}({priceData?.quotes.USD.percent_change_24h}{" "}
              %)
            </span>
            <span>24hour ago</span>
          </TitleSection>
          <Wrapper>
            <Section>
              <Chart chartData={chartData ?? []} />
              <Content>
                <SubTitle>Basic Information</SubTitle>
                <Info>
                  <InfoLine>
                    <div>
                      <span>Name</span>
                      <span>{coinInfo?.name}</span>
                    </div>
                    <div>
                      <span>Rank</span>
                      <span>{coinInfo?.rank}</span>
                    </div>
                  </InfoLine>

                  <InfoLine>
                    <div>
                      <span>Type</span>
                      <span>{coinInfo?.type}</span>
                    </div>
                    <div>
                      <span>Price</span>
                      <span>$ {todayPrice}</span>
                    </div>
                  </InfoLine>

                  <InfoLine>
                    <div>
                      <span>Total supply</span>
                      <span>{priceData?.total_supply}</span>
                    </div>
                    <div>
                      <span>Max supply</span>
                      <span>{priceData?.max_supply}</span>
                    </div>
                  </InfoLine>
                  <InfoLine>
                    <div>
                      <span>Volatility</span>
                      <span>
                        {priceData?.beta_value.toFixed(2)}
                        <p>
                          (If it is less than 1, it means it is less volatile
                          than the market)
                        </p>
                      </span>
                    </div>
                  </InfoLine>
                </Info>
              </Content>

              <Content>
                <SubTitle>Highest price ever</SubTitle>
                <Info>
                  <InfoLine>
                    <div>
                      <span className="highest">Highest price ever</span>
                      <span>
                        $ {priceData?.quotes.USD.ath_price.toFixed(2)}
                      </span>
                    </div>
                  </InfoLine>
                  <InfoLine>
                    <div>
                      <span className="highest">Date with highest price</span>
                      <span>
                        {priceData &&
                          new Date(
                            priceData.quotes.USD.ath_date
                          ).toLocaleDateString()}
                      </span>
                    </div>
                  </InfoLine>
                  <InfoLine>
                    <div>
                      <span className="highest">
                        Compare with the highest price
                      </span>
                      <span>
                        {priceData?.quotes.USD.percent_from_price_ath} %
                      </span>
                    </div>
                  </InfoLine>
                </Info>
              </Content>
            </Section>

            <Section>
              <CandleChart chartData={chartData ?? []} />
              <Content>
                <SubTitle>Rate of change</SubTitle>
                <Rates>
                  {priceData &&
                    rateArr.map((word) => (
                      <Rate
                        time={word}
                        value={
                          (
                            priceData.quotes.USD as unknown as Record<
                              string,
                              number
                            >
                          )[`percent_change_${word}`]
                        }
                        key={word}
                      />
                    ))}
                </Rates>
              </Content>
            </Section>
          </Wrapper>
        </div>
      )}
    </Container>
  );
};

export default Coin;
