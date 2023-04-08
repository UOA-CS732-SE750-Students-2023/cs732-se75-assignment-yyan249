import React from "react";
import ReactEcharts from "echarts-for-react";
import { Typography } from "@mui/material";

const dataset = [
  { type: "Precipitation", days: 15 },
  { type: "Cloudy", days: 8 },
  { type: "Sunny", days: 5 },
];

const pieOption = {
  // dataset: dataset,
  title: {
    text: "Pie chart",
    subtext: "weather type in days",
  },
  toolbox: {
    feature: {
      dataZoom: {},
      // restore: {},
    },
  },
  grid: { top: 50, right: 8, bottom: 24, left: 30 },
  legend: {
    orient: "vertical",
  },
  xAxis: { show: false },
  yAxis: { show: false },
  series: [
    {
      data: dataset.map((item) => ({
        name: item.type,
        value: item.days,
      })),
      // name: "weather in days",
      type: "pie",

      id: "days",
      radius: "55%",
      universalTransition: true,
      animationDurationUpdate: 1000,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0,0,0,0.5)",
        },
      },
    },
  ],
  tooltip: {
    trigger: "item",
    formatter: "{c} days({d}%)",
  },
};
const barOption = {
  // dataset: dataset,

  title: {
    text: "Bar chart",
  },
  toolbox: {
    feature: {
      dataZoom: {},
      // restore: {},
    },
  },
  grid: { top: 50, right: 8, bottom: 24, left: 30 },
  legend: {
    data: dataset.map((item) => item.days),
  },

  xAxis: {
    type: "category",
    data: dataset.map((item) => item.type),
    show: true,
  },
  yAxis: { show: true },
  series: [
    {
      data: dataset.map((item) => ({
        name: item.type,
        value: item.days,
      })),
      name: dataset.map((item) => item.days),

      type: "bar",

      id: "days",

      colorBy: "data",
      encode: { x: "type", y: "days" },
      universalTransition: true,
      animationDurationUpdate: 1000,
    },
  ],
  tooltip: {
    trigger: "axis",
    formatter: " {b},{c} days",
  },
};

function PieAndBarChart() {
  const [currentChart, setCurrentChart] = React.useState(pieOption);

  const toggleCharts = () => {
    setCurrentChart(currentChart === pieOption ? barOption : pieOption);
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        this is a Pie and Bar chart page
      </Typography>

      <button onClick={() => toggleCharts()} style={{ width: "200px" }}>
        Change Chart Type
      </button>
      <ReactEcharts option={currentChart} style={{ height: 400 }} />
    </>
  );
}
export default PieAndBarChart;
