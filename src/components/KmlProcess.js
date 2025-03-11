import * as  toGeoJson from "@tmcw/togeojson";

export const parseKML = (kmlString)=>{
    const parser = new DOMParser();
    const kmlData = parser.parseFromString(kmlString, "text/xml");
    return toGeoJson.kml(kmlData)

}


export const getSummary = (geoJson) => {

    if (!geoJson || !geoJson.features) {
        console.error("Invalid GeoJSON data:", geoJson);
        return {};
    }

    const summary = {};
    geoJson.features.forEach(feature => {
        if (!feature.geometry || !feature.geometry.type) return

        const type = feature.geometry.type;
        summary[type] = (summary[type] || 0) + 1;
    });

    return summary;
};

export const generateDetails = (geoJSON) => {
    const detailsData = [];
  
    geoJSON.features.forEach(feature => {
        if (!feature.geometry || !feature.geometry.type) return;
      
        const type = feature.geometry.type;
        let length = 0;
  
        if (type === 'LineString') {
            length = calculateLineStringLength(feature.geometry.coordinates);
        } else if (type === 'MultiLineString') {
            length = feature.geometry.coordinates.reduce((total, line) => {
                return total + calculateLineStringLength(line);
            }, 0);
        }
  
        detailsData.push({
            type,
            length: length.toFixed(2),
            name: feature.properties.name || 'Unnamed',
            description: typeof feature.properties.description === "object" 
                          ? feature.properties.description.value || "No description"
                          : feature.properties.description || "No description"
        });
    });
  
    return detailsData;
};

  
  // Helper function to calculate length of a LineString
  const calculateLineStringLength = (coordinates) => {
    let length = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
      const [lon1, lat1] = coordinates[i];
      const [lon2, lat2] = coordinates[i + 1];
      length += calculateDistance(lat1, lon1, lat2, lon2);
    }
    return length;
  };
  
  // Helper function to calculate distance using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };
  