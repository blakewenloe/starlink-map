import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import Satellites from "./Satellites";

export default function Map(props) {
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
