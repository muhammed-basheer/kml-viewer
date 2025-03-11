import React from 'react'
import { parseKML,getSummary,generateDetails } from './KmlProcess';

const FileUploader = ({setGeoJson,setSummary, setDetails}) => {
  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    if(!file)return;
    const reader = new FileReader();

    reader.onload = (e)=>{
      const fileContent = e.target.result;
      const geoJson = parseKML(fileContent)
      console.log("Parsed GeoJSON:", geoJson);

      setGeoJson(geoJson)
     const summaryData = getSummary(geoJson);
     console.log("Summary Data:", summaryData);

      setSummary(summaryData)
      const detailsData = generateDetails(geoJson);
      console.log("Generated Details///////:", detailsData); 
      setDetails(detailsData);
    }
    reader.readAsText(file);
  }
  return (
   <div>
    <h2>upload kml file</h2>
    <input type='file' accept='.kml' onChange={handleFileChange}/>
   </div>
  )
}

export default FileUploader