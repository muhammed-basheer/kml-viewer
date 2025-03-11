import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import SummaryView from "./components/SummaryView";
import DetailedView from "./components/DetailedView";
import MapView from "./components/MapView";

function App() {
  const [geoJson, setGeoJson] = useState(null);
  const [summary, setSummary] = useState(null);
  const [details, setDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("map");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">KML Viewer</h1>
          <p className="text-gray-400">Upload KML files to visualize geographic data</p>
        </header>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
          <FileUploader setGeoJson={setGeoJson} setSummary={setSummary} setDetails={setDetails} />
        </div>

        {geoJson && (
          <>
            <div className="flex space-x-2 mb-6 bg-gray-800 p-2 rounded-lg">
              <button 
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === "map" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                onClick={() => setActiveTab("map")}
              >
                Map View
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === "summary" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                onClick={() => setActiveTab("summary")}
              >
                Summary
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === "detailed" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                onClick={() => setActiveTab("detailed")}
              >
                Detailed
              </button>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {activeTab === "map" && <MapView geoJson={geoJson} />}
              {activeTab === "summary" && <SummaryView summary={summary} />}
              {activeTab === "detailed" && <DetailedView details={details} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;