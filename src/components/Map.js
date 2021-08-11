import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import SatIcon from "./satellite.png";
import L from "leaflet";
import LocationMarker from "./LocationMarker";

const satIcon = L.icon({
  iconUrl: SatIcon,
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

export default function Map(props) {
  const Satellites = () => {
    return props.satellites
      ? props.satellites.above.map((launchPad) => {
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
  return (
    <MapContainer
      center={[0, 0]}
      zoom={5}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Satellites />
      <LocationMarker />
    </MapContainer>
  );
}
