import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [satellites, setData] = useState();
  const defaultCenter = [0, 0];
  const defaultZoom = 4;

  useEffect(() => {
    const updateLocations = async () => {
      const API_URL = process.env.REACT_APP_API_URL;
      const response = await axios(
        `${API_URL}satellites/above-me/30.626945/-96.334334`
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
