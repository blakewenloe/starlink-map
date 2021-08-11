import React from "react";
import Map from "./components/Map";

function App() {
  const defaultCenter = [0, 0];
  const defaultZoom = 4;

  return <Map center={defaultCenter} zoom={defaultZoom}></Map>;
}

export default App;
