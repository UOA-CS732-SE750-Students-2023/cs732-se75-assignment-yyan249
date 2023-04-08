import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { Typography } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import geoJson from "./Auckland.json";

const API_KEY = "AIzaSyBeH4Wf1IQ8-W9DCmpeGKHrLUUtaWj8mV4";

echarts.registerMap("Auckland", geoJson);

const dataset = [
  { name: "Waitematā", value: 32 },
  { name: "Albert-Eden", value: 26 },
  { name: "Devonport-Takapuna", value: 39 },
  { name: "Kaipātiki", value: 29 },
  { name: "Ōrākei", value: 5 },
];

const options = {
  title: {
    text: "Auckland Region Map",
  },
  tooltip: {
    trigger: "item",
    showDelay: 0,
    trasitionDurant: 0.2,
    formatter: (params) => {
      const { name, value } = params.data;
      return `<div>Region: ${name}<br>Rainfall: ${value}mm</div>`;
    },
  },
  visualMap: {
    left: "right",
    min: 0,
    max: 50,
    inRange: {
      color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
    },
    text: ["High", "Low"],
    calculable: true,
  },
  geo: {
    map: "Auckland",
    geoIndex: 0,
    roam: false,
    zoom: 0.8,
    label: {
      show: true,
    },
    emphasis: {
      label: {
        show: true,
      },
      data: dataset,
      itemStyle: {
        // areaColor: "rgba(255, 255, 255, 0.7)",
        areaColor: "transparent",
        borderWidth: 1,
        borderColor: "grey",
      },
    },
    left: "30%",
    top: "17%",
    right: "25%",
    bottom: "20%",
  },
  series: [
    {
      type: "map",
      map: "Auckland",
      geoIndex: 0,
      selectedMode: false,
      label: {
        show: true,
      },
      data: dataset,
    },
  ],
};

function MapChart() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        This is the map page
      </Typography>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: "80vw", height: "80vh" }}
          center={{ lat: -36.848461, lng: 174.763336 }}
          zoom={11}
        >
          <ReactEcharts
            option={options}
            style={{ width: "80vw", height: "80vh" }}
          />
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default MapChart;
