import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./home";
import NoPage from "./NoPage";

import "./App.css";
import LineChart from "./LineChart";
import ScatterChart from "./ScatterChart";
import PieAndBarChart from "./PieAndBarChart";
import MapChart from "./MapChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="LineChart" element={<LineChart />} />
        <Route path="ScatterChart" element={<ScatterChart />} />
        <Route path="PieAndBarChart" element={<PieAndBarChart />} />
        <Route path="MapChart" element={<MapChart />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
