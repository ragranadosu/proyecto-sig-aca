import React, {useEffect, useState} from 'react';
import RoutesService from '../../services/busesRoutesService';
import color from "randomcolor";

/**
 *
 * @param routesBuses
 * @param routesMicrobuses
 * @returns {JSX.Element}
 * @constructor
 */

const RoutesList = ({routesBuses, routesMicrobuses,rutas}) => {
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [loading, isLoading] = useState(true);
   

    useEffect(() => {
        //aqui va route.route
        routeInfo(rutas);
        
        console.log('ruta seleccionada',selectedRoute );
    }, [rutas])

  

    const listItemsBuses = routesBuses.map((route) =>
        <li className="list">{route.name}</li>
    );

    const listItemsMicrobuses = routesMicrobuses.map((route) =>
        <li className="list">{route.name}</li>
    );

    const routeInfo = (route) => {
        isLoading(true);
        RoutesService.getRoutes(route).then((response) => {
            setSelectedRoute(response[0]);
        }).catch((e) => {
            console.log(e, "No se han podido cargar las rutas");
        }).finally(() => {
            isLoading(false);
        })
    }
  
    return (
        <div className="listab">
            <div class="card">




<div class="features">
    <div className="pareja2">
    <h2 className="title  title2">Nombre: </h2><h2 className="title">Ruta {selectedRoute ? selectedRoute.features[0].properties.NAME : null}</h2>
    </div>
    <div className="pareja2">
    <h2 className="title title2">Origen:</h2><h2 className="title">{selectedRoute ? selectedRoute.features[0].properties.ORIGEN : null}</h2>
    </div>
    <div className="pareja2">
    <h2 className="title title2">Destino: </h2><h2 className="title">{selectedRoute ? selectedRoute.features[0].properties.DESTINO : null}</h2>
    </div>
    <div className="pareja2">
    <h2 className="title title2">Kilometros: </h2><h2 className="title">{selectedRoute ? selectedRoute.features[0].properties.KILOMETROS : null}</h2>
    </div>
    <div className="pareja2">
    <h2 className="title title2">Horario de lunes a viernes: </h2><h2 className="title">{selectedRoute ? selectedRoute.features[0].properties.H_INIC_LV : null}</h2>
    <h2 className="title">{selectedRoute ? selectedRoute.features[0].properties.H_FIN_LV : null}</h2>

    </div>
    <div className="pareja2">
    <h2 className="title title2">Horario de fin de semana: </h2><h2 className="title">{selectedRoute ? selectedRoute.features[0].properties.H_INIC_SD : null}</h2>
<h2 className="title">{selectedRoute ? selectedRoute.features[0].properties.H_FIN_SD : null}</h2>
    </div>
    


</div>

<a href="#secondPage" class="btn">Ir al mapa</a>

</div>






          
      
    
        </div>
 
    );
}

export default RoutesList;