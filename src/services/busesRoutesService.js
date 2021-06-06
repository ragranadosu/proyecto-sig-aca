const axios = require("axios").default;
const service = {}

service.getRoute = async () => {
    try{
        const response = await axios.get("https://io.hackerspace.sv/data/rutas/GeoJSON/AB000A0_RECORRIDO.GeoJSON", {
            headers:{
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
        return response.data;
        //console.log(response);
    }catch (e){
        console.log(e);
    }
}

export default service;