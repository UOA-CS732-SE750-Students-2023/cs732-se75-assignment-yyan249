import React from "react";
import ReactEcharts from "echarts-for-react";
import { Typography } from "@mui/material";

const dataset = [
  { type: "Mon", degree: 18 },
  { type: "Tue", degree: 19 },
  { type: "Wed", degree: 25 },
  { type: "Thu", degree: 17 },
  { type: "Fri", degree: 20 },
  { type: "Sat", degree: 15 },
  { type: "Sun", degree: 14 },
];

function LineChart() {
  const options = {
    title: {
      text: "Line chart demo",
    },
    toolbox: {
      feature: {
        dataZoom: {},
        // restore: {},
      },
    },
    grid: { top: 50, right: 8, bottom: 24, left: 30 },
    legend: {},
    xAxis: {
      data: dataset.map((item) => item.type),
    },
    yAxis: {},
    series: [
      {
        name: "Weather in temperature degree",
        data: dataset.map((item) => ({
          name: item.type,
          value: item.degree,
        })),
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
      formatter: " {a},<br>{b}, {c}°C ",
    },
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        this is line chart page
      </Typography>
      <ReactEcharts option={options} style={{ height: 400 }} />
    </>
  );
}

export default LineChart;
