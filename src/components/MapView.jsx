import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ geoJson }) => {
  if (!geoJson || !geoJson.features) {
    return <p>No map data available. Upload a valid KML file.</p>;
  }

  return (
    <div>
      <h2>Map View</h2>
      <MapContainer style={{ height: "500px", width: "100%" }} center={[20, 0]} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <GeoJSON data={geoJson} />
      </MapContainer>
    </div>
  );
};

export default MapView;
