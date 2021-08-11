import React, { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [satellites, setData] = useState();

  const defaultCenter = [0, 0];
  const defaultZoom = 4;

  useEffect(() => {
    const updateLocations = async () => {
      const response = await axios(
        "http://3.143.45.11:3000/satellites/above-me/30.626945/-96.334334"
      );
      return setData(response.data);
    };
    updateLocations();
    setInterval(updateLocations, 5000);
  }, []);

  return (
    <Map
      center={defaultCenter}
      satellites={satellites}
      zoom={defaultZoom}
    ></Map>
  );
}

export default App;
