import React, { useState, useEffect } from "react";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import SatIcon from "../assets/satellite.png";
import L from "leaflet";

const satIcon = L.icon({
  iconUrl: SatIcon,
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const Satellites = () => {
  const [satellites, setData] = useState();

  useEffect(() => {
    const updateLocations = async () => {
      const API_URL = process.env.REACT_APP_BASE_URL;
      const response = await axios(`${API_URL}30.626945/-96.334334`);
      return setData(response.data);
    };
    updateLocations();
    setInterval(updateLocations, 5000);
  }, []);
  return satellites
    ? satellites.above.map((launchPad) => {
        return (
          <Marker
            position={[launchPad.satlat, launchPad.satlng]}
            key={launchPad["satid"]}
            icon={satIcon}
          >
            <Popup>
              <p class="landpad-details">
                Sat Name:
                <strong>{launchPad.satname}</strong>
                <br />
              </p>
            </Popup>
          </Marker>
        );
      })
    : "Map is loading...";
};

export default Satellites;
