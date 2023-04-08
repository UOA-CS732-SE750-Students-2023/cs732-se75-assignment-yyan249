import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Typography } from "@mui/material";

const dataset = [
  { temperature: 18, watt: 3 },
  { temperature: 28, watt: 8 },
  { temperature: 15, watt: 5 },
  { temperature: 12, watt: 7 },
  { temperature: 18, watt: 5 },
];

function ScatterChart() {
  const [markerStyle, setMarkerStyle] = useState("default");

  const getMarkerOptions = () => {
    if (markerStyle === "default") {
      return {
        symbolSize: 20,
        itemStyle: {
          color: "#FF6600",
        },
      };
    } else {
      return {
        symbolSize: 10,
        itemStyle: {
          color: "#0066FF",
        },
      };
    }
  };

  const options = {
    title: {
      text: "Scatter plot demo",
      subtext:
        "half-hourly electricity demand (in Gigawatts) in Auckland vs temperature degree °C",
    },
    toolbox: {
      feature: {
        dataZoom: {},
      },
    },
    grid: { top: 50, right: 8, bottom: 24, left: 30 },
    legend: {
      data: ["Electricity demand vs Temperature"],
    },
    xAxis: {
      type: "value",
      name: "Temperature (°C)",
    },
    yAxis: {},
    series: [
      {
        name: "Electricity demand vs Temperature",

        data: dataset.map((item) => [item.temperature, item.watt]),
        type: "scatter",
        ...getMarkerOptions(),
      },
    ],
    tooltip: {
      trigger: "item",
      formatter: (params) => {
        return `Temperature: ${params.value[0]}°C<br/>Electricity demand: ${params.value[1]} GW`;
      },
    },
  };

  const toggleMarkerStyle = () => {
    setMarkerStyle(markerStyle === "default" ? "alternate" : "default");
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        this is scatter chart page
      </Typography>
      <button onClick={toggleMarkerStyle}>Toggle Marker Style</button>
      <ReactEcharts option={options} style={{ height: 400 }} />
    </>
  );
}

export default ScatterChart;
