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

const RoutesList = ({routesBuses, routesMicrobuses}) => {
    const [selectedRoute, setSelectedRoute] = useState();
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        //aqui va route.route
        routeInfo("MB045A0_RECORRIDO.GeoJSON");

        console.log('ruta seleccionada', selectedRoute);
    }, [])

    const listItemsBuses = routesBuses.map((route) =>
        <li>{route.name}</li>
    );

    const listItemsMicrobuses = routesMicrobuses.map((route) =>
        <li>{route.name}</li>
    );

    const routeInfo = (route) => {
        isLoading(true);
        RoutesService.getRoutes([route]).then((response) => {
            setSelectedRoute(response[0]);
        }).catch((e) => {
            console.log(e, "No se han podido cargar las rutas");
        }).finally(() => {
            isLoading(false);
        })
    }

    return (
        <div>
            <h2>Autobuses</h2>
            <ul>{listItemsBuses}</ul>

            <h2>Microbuses</h2>
            <ul>{listItemsMicrobuses}</ul>
        </div>
    );
}

export default RoutesList;