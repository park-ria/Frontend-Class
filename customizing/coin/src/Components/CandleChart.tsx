import styled from "styled-components";

import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
import { CoinHistory } from "../routes/Coin";

const Container = styled.div`
  width: 100%;
  transform: translateX(-10px);
`;

const CandleChart = ({ chartData }: { chartData: CoinHistory[] }) => {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <Container>
      {chartData.length > 0 ? (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data:
                chartData?.map((price) => {
                  return {
                    x: new Date(price.time_close * 1000).toLocaleDateString(),
                    y: [
                      parseFloat(price.open),
                      parseFloat(price.high),
                      parseFloat(price.low),
                      parseFloat(price.close),
                    ],
                  };
                }) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            xaxis: {
              labels: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "14px",
                },
                formatter: (value) => `${value}`,
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(2)}`,
              },
            },
          }}
        />
      ) : (
        "No Data"
      )}
    </Container>
  );
};

export default CandleChart;
