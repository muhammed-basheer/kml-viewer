import React from 'react'
import { parseKML } from './KmlProcess';

const FileUploader = ({onFileUpload}) => {
  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    if(!file)return;
    const reader = new FileReader();

    reader.onload = (e)=>{
      const fileContent = e.target.result;
      const geoJson = parseKML(fileContent)
      console.log("geoJson////",geoJson);
      onFileUpload(geoJson); 
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