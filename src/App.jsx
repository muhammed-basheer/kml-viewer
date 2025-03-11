import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import SummaryView from "./components/SummaryView";
import DetailedView from "./components/DetailedView";

function App() {
  const [geoJson, setGeoJson] = useState(null);
  const [summary, setSummary] = useState(null);
  const [details, setDetails] = useState(null);

  // console.log("details///////",details)

  const [showSummary, setShowSummary] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);

  return (
    <div>
      <h1>KML Viewer</h1>
      
      <FileUploader setGeoJson={setGeoJson} setSummary={setSummary} setDetails={setDetails} />

      {geoJson && (
        <>
          <button onClick={() => setShowSummary(true)}>Summary</button>
          <button onClick={() => setShowDetailed(true)}>Detailed</button>
        </>
      )}

      {showSummary && <SummaryView summary={summary} />}

      {showDetailed && <DetailedView details={details} />}
    </div>
  );
}

export default App;
