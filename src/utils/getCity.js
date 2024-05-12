import axios from "axios";

export default async function getCity(lng, lat) {
  lng = lng.toFixed(5);
  lat = lat.toFixed(5);

  const key = "1dff3e224b6e8228f3cf4c10fa31b335";
  
  const result = await axios.get(`https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${lng},${lat}`);
  // const result = await http.get(`/amap/geocode/regeo?key=${key}&location=${lng},${lat}`);

  return result.data;
}
