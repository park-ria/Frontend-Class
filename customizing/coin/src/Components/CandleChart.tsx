import styled from "styled-components";

import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
import { CoinHistory } from "../routes/Coin";

const Container = styled.div`
  width: 100%;
  transform: translateX(-10px);
  @media screen and (max-width: 1050px) {
    transform: translateX(0);
  }
`;

const CandleChart = ({ chartData }: { chartData: CoinHistory[] }) => {
  const isDark = useRecoilValue(isDarkAtom);

  const leftPad = (target: string) => {
    return target.padStart(2, "0");
  };

  return (
    <Container>
      {chartData.length > 0 && (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data:
                chartData?.map((item) => {
                  const chartDate = new Date(item.time_close * 1000);
                  return {
                    x:
                      leftPad(String(chartDate.getMonth() + 1)) +
                      "." +
                      leftPad(String(chartDate.getDate())),
                    y: [
                      parseFloat(item.open),
                      parseFloat(item.high),
                      parseFloat(item.low),
                      parseFloat(item.close),
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
              zoom: {
                enabled: false,
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
      )}
    </Container>
  );
};

export default CandleChart;
