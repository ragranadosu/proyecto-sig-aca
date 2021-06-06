const axios = require("axios").default;
const service = {}

service.getRoutes = async (names) => {
    try {
        const response = [];
        var route;
        for (var i = 0; i < names.length; i++) {
            try {
                route = await axios.get(`https://io.hackerspace.sv/data/rutas/GeoJSON/${names[i]}`);
                response.push(route.data);
            } catch (e) {
                console.log(`no se pudo esta ruta: ${names[i]}`);
            }
        }


        return response;
        //console.log(response);
    } catch (e) {
        console.log(e);
    }
}

export default service;