import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ geoJson }) => {
  if (!geoJson || !geoJson.features) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-400">No map data available. Upload a valid KML file.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-300">Map View</h2>
      <div className="rounded-lg overflow-hidden border border-gray-600 shadow-lg">
        <MapContainer 
          style={{ height: "600px", width: "100%" }} 
          center={[20, 0]} 
          zoom={2}
          className="z-0" // Ensure proper z-index
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <GeoJSON 
            data={geoJson} 
            style={() => ({
              color: '#3b82f6',
              weight: 3,
              opacity: 0.7,
            })}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;