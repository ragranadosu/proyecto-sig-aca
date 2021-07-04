import React, {useEffect} from 'react';

const RoutesList = ({routesBuses, routesMicrobuses}) => {
    useEffect(() => {
        //console.log(routes[0].name);
    },[])

    const listItemsBuses = routesBuses.map((route) =>
        <li>{route.name}</li>
    );

    const listItemsMicrobuses = routesMicrobuses.map((route) =>
        <li>{route.name}</li>
    );

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