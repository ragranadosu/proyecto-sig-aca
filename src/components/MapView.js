import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet'
import Icon from './IconMarker';
import 'leaflet/dist/leaflet.css'
import names from '../data/RoutesNames';
import RoutesService from '../services/busesRoutesService'

const MapView = () => {
    const [routes, setRoutes] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {

        RoutesService.getRoutes(names).then((response) => {
            setRoutes(response);
        }).catch((e) => {
            console.log(e, "No se han podido cargar las rutas");
        }).finally(() => {
            isLoading(false);
        })

    }, []);

    return (
        <div>
            {!loading ?
                <MapContainer center={[13.6527, -88.8684]} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {routes.map((route) => {
                        console.log(route.name);
                        return (
                            <GeoJSON key={route.name} data={route}/>
                        )
                    })}

                    {/*<Marker position={[13.6527, -88.8684]} icon={Icon}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>*/}
                </MapContainer>
                :
                <div>
                    <a>cargando</a>
                </div>
            }
        </div>
    );
}

export default MapView;