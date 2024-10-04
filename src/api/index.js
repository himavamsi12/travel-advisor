import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude:sw.lng ,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'c240e2d2b1msh2e107739a4727fep1250a1jsnc02d4d211316',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    }
    catch(error){
         console.log(error)
    }
}