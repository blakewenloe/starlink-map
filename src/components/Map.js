import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map(props) {
  return props.launchPads ? (
    <MapContainer
      center={[37.937141, -100.309096]}
      zoom={5}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      ,
      {props.launchPads.map((launchPad) => {
        const point = [
          launchPad["location"].latitude,
          launchPad["location"].longitude,
        ];

        return (
          <Marker position={point} key={launchPad["id"]}>
            <Popup>
              <p class="landpad-details">
                Site Name:
                <strong>
                  {launchPad.site_name_long} ({launchPad.name})
                </strong>
                <br />
                Status: <strong>{launchPad.status}</strong>
                <br />
                Attempted launches:
                <strong>{launchPad.attempted_launches}</strong>
                <br />
                Successful launches:
                <strong>{launchPad.successful_launches}</strong>
                <br />
                Vehicles Launched:
                <ul>
                  {launchPad.vehicles_launched.map((vehicle, i) => (
                    <li key={i}>
                      <strong>{vehicle}</strong>
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Details</strong>: {launchPad.details}
                </p>
                Location:
                <strong>
                  {launchPad.location.name}, {launchPad.location.region}
                </strong>
              </p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  ) : (
    "Data is loading..."
  );
}
