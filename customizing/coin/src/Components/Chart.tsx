import styled, { useTheme } from "styled-components";
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

const Chart = ({ chartData }: { chartData: CoinHistory[] }) => {
  const isDark = useRecoilValue(isDarkAtom);
  const theme = useTheme();

  const leftPad = (target: string) => {
    return target.padStart(2, "0");
  };

  return (
    <Container>
      {chartData.length > 0 && (
        <ApexChart
          type="area"
          series={[
            {
              name: "Price",
              data: chartData?.map((item) => parseFloat(item.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
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
            dataLabels: {
              enabled: false,
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
              categories: chartData.map((item) => {
                const chartDate = new Date(item.time_close * 1000);
                return (
                  leftPad(String(chartDate.getMonth() + 1)) +
                  "." +
                  leftPad(String(chartDate.getDate()))
                );
              }),
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
            colors: [theme.accentColor],
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100],
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

export default Chart;
