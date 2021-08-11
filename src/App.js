import React from "react";
import Map from "./components/Map";
import Satellites from "./components/Satellites";
function App() {
  const defaultCenter = [0, 0];
  const defaultZoom = 4;

  return (
    <Map center={defaultCenter} zoom={defaultZoom}>
      <Satellites />
    </Map>
  );
}

export default App;
