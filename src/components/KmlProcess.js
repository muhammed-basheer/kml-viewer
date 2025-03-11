import * as  toGeoJson from "@tmcw/togeojson";

export const parseKML = (kmlString)=>{
    const parser = new DOMParser();
    const kmlData = parser.parseFromString(kmlString, "text/xml");
    return toGeoJson.kml(kmlData)

}