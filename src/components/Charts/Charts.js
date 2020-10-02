import React from "react";
//import { apiDailyData } from "../../api";
import {  Bar, Doughnut , Pie } from "react-chartjs-2";
import styles from "./Charts.module.css";

const Charts = ({ data, country }) => {
  // const [apiDataaDaily, setApiDataaDaily] = useState([]);
  // const [isApiDataComing, setIsApiDataComing] = useState(false);

  // // async function fetchData() {
  // //   const data = await apiDailyData();
  //   setApiDataaDaily(data);
  //   console.log("data daily baby", data);

  //   if (apiDataaDaily) {
  //     setIsApiDataComing(true);
  //   }

  //   console.log("Daliy data is", apiDataaDaily);
  //   console.log("Daily data is coming", isApiDataComing);
  // }

  // useEffect(() => {
  //   fetchData();
  // });


  const pieChart = data.confirmed ? (
    <Pie
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
          text: `Global`,
          fontSize: 30,
        },
      }}
    />
  ) : null;


  // const lineChart = isApiDataComing ? (
  //   <Line
  //     data={{
  //       labels: apiDataaDaily.map(({ reportDate }) => reportDate),
  //       datasets: [
  //         {
  //           data: apiDataaDaily.map(({ confirmed }) => confirmed),
  //           label: "Infected",
  //           borderColor: "#3333ff",
  //           fill: true,
  //         },
  //         {
  //           data: apiDataaDaily.map(({ deaths }) => deaths),
  //           label: "Deaths",
  //           borderColor: "red",
  //           backgroundColor: "rgba(255, 0, 0)",
  //           fill: true,
  //         },
  //       ],
  //     }}
  //   />
  // ) : null;

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
  ) : <h1>API for Global data is not working !</h1>;

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
      {country ? doughnutChart : pieChart}
      <br />
      {country ? barChart : null}
    </div>
  );
};

export default Charts;
