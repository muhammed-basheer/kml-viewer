import React from 'react';
import { parseKML, getSummary, generateDetails } from './KmlProcess';

const FileUploader = ({ setGeoJson, setSummary, setDetails }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      const geoJson = parseKML(fileContent);
      setGeoJson(geoJson);
      
      const summaryData = getSummary(geoJson);
      setSummary(summaryData);
      
      const detailsData = generateDetails(geoJson);
      setDetails(detailsData);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-300">Upload KML File</h2>
      <div className="flex items-center justify-center w-full">
        <label 
          htmlFor="kml-file" 
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">KML files only</p>
          </div>
          <input id="kml-file" type="file" className="hidden" accept=".kml" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  );
};

export default FileUploader;