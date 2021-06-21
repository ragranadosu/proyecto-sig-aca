import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, GeoJSON, ZoomControl, Pane, useMap, useMapEvent} from 'react-leaflet'
import color from 'randomcolor';
import Icon from '../IconMarker';
import 'leaflet/dist/leaflet.css'
import Routes from '../../data/RoutesNames';
import RoutesService from '../../services/busesRoutesService';

const MapUtil = () => {
    const map = useMap();
    console.log(map.getCenter());
    return null;
}


const MapView = (props) => {
    const [routes, setRoutes] = useState([]);
    const [center, setCenter] = useState([13.7153719325982, -89.19499397277833]);
    const [loading, isLoading] = useState(true);
    const [selectedRoute, setSelectedRoute] = useState(null);
    const colors = [];

    const MapEvents = () => {
        const map = useMapEvent({
            click: () => {
                console.log(map.getCenter());
                setSelectedRoute(null);
            }
        })
        return null;
    }

    useEffect(() => {
        const routes = props.rutas || Routes.default;

        RoutesService.getRoutes(routes).then((response) => {
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
                <MapContainer center={props.center || (center)} zoom={13} scrollWheelZoom={false}>
                    {/*<MapUtil/>*/}
                    {<MapEvents/>}
                    <ZoomControl position="bottomleft"/>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {routes.map((route, index) => {
                        console.log(index == selectedRoute);
                        return (
                            <GeoJSON
                                eventHandlers={{
                                    click: () => {
                                        setSelectedRoute(index);
                                    },
                                }}
                                key={route.name}
                                data={route}
                                pathOptions={{
                                    color: selectedRoute == index ? 'black' : color({
                                        luminosity: 'dark'
                                    }),
                                    opacity: (selectedRoute != null && selectedRoute != index) ? 0.1 : 1
                                }}
                                //attribution="&copy; credits due..."
                            >
                                <Popup>
                                    {route.name}
                                </Popup>
                            </GeoJSON>
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
                    <a>Cargando</a>
                </div>
            }
        </div>
    );
}

export default MapView;