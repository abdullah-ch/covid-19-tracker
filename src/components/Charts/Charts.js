import React, { useEffect, useState } from "react";
import { apiDailyData } from "../../api";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import styles from "./Charts.module.css";

const Charts = ({ data, country }) => {
  const [apiDataaDaily, setApiDataaDaily] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await apiDailyData();
      setApiDataaDaily(data);
    }
    fetchData();
  }, []);

  const lineChart = apiDataaDaily[0] ? (
    <Line
      data={{
        labels: apiDataaDaily.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: apiDataaDaily.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: apiDataaDaily.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  console.log("Bruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", country);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["blue", "greenyellow", "red"],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
      }}
    />
  ) : null;

  const doughnutChart = data.confirmed ? (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
            backgroundColor: ["blue", "greenyellow", "red"],
            hoverBackgroundColor: ["blue", "greenyellow", "red"],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: {
          display: true,
          text: `Current State in ${country}`,
          fontSize: 30,
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country ? doughnutChart : lineChart}
      <br/>
      {country ? barChart: null}
    </div>
  );
};

export default Charts;
