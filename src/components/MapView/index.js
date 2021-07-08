import React, {useEffect, useRef, useState} from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    GeoJSON,
    ZoomControl,
    LayersControl,
    useMap,
    useMapEvent
} from 'react-leaflet'
import color from 'randomcolor';
import Icon from '../IconMarker';
import 'leaflet/dist/leaflet.css'
import Routes from '../../data/RoutesNames';
import RoutesService from '../../services/busesRoutesService';
import utils from '../../utils';
import {popup} from "leaflet/dist/leaflet-src.esm";

/**
 *
 * @param rutas
 * @param centerProp
 * @returns {JSX.Element}
 * @constructor
 */

const MapView = ({rutas, centerProp}) => {
    const [routes, setRoutes] = useState([]);
    const [center, setCenter] = useState([13.7153719325982, -89.19499397277833]);
    const [loading, isLoading] = useState(true);
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [colors, setColors] = useState([]);
    const [bounds, setBounds] = useState(null);

    const referenciaRuta = useRef();
    const referenciaMapa = useRef();

    const MapUtil = ({bounds}) => {
        const map = useMap();

        if(bounds){
            map.fitBounds(bounds);
        }

        return null;
    }

    const MapEvents = () => {
        const map = useMapEvent({
            click: () => {
                setSelectedRoute(null);
            }
        })

        return null;
    }

    /*const PopUp = (route) => {
        return A pretty CSS3 popup. <br/> Easily customizable.""
    }*/

    useEffect(() => {
        var routes = rutas.length > 0 ? rutas : Routes.default;
        const colorsArray = [];

        RoutesService.getRoutes(routes).then((response) => {

            for (var i = 0; i < response.length; i++) {
                colorsArray.push(
                    color({luminosity: 'dark'})
                );
            }

            setColors(colorsArray);
            setRoutes(response);
        }).catch((e) => {
            console.log(e, "No se han podido cargar las rutas");
        }).finally(() => {
            isLoading(false);
        })

        if(rutas.length == 1 && referenciaRuta.current != null){
            console.log(referenciaMapa.current);
        }

    }, [rutas]);

    useEffect(() => {
        setSelectedRoute(null);
        if(referenciaRuta.current){
            setBounds(referenciaRuta.current.getBounds());
        }

    },[routes])

    return (
        <div>
            {!loading ?
                <MapContainer center={centerProp || (center)} zoom={13} scrollWheelZoom={false}>
                    {<MapUtil bounds={bounds} />}
                    {<MapEvents/>}
                    <ZoomControl position="bottomleft"/>
                    <LayersControl position="bottomleft" collapsed={true}>

                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {routes.map((route, index) => {

                            return (
                                <LayersControl.Overlay checked name={`Ruta ${route.features[0].properties.NAME}`}>
                                    <GeoJSON
                                        ref={routes.length == 1 ? referenciaRuta : null}
                                        eventHandlers={{
                                            click: () => {
                                                setSelectedRoute(route.name);
                                            },
                                        }}
                                        key={route.name}
                                        data={route}
                                        pathOptions={{
                                            color: selectedRoute == route.name ? 'black' : colors[index],
                                            opacity: (selectedRoute != null && selectedRoute != route.name) ? 0.2 : 1
                                        }}
                                        //attribution="&copy; credits due..."
                                    >
                                        <Popup>
                                            {`Ruta ${route.features[0].properties.NAME}`} <br/>
                                            <br/>
                                            Horario semanal: <br/>
                                            {`Inicio: ${route.features[0].properties.H_INIC_LV}` } <br/>
                                            {`Final: ${route.features[0].properties.H_FIN_LV}` } <br/>
                                            <br/>
                                            Horario fin de semana: <br/>
                                            {`Inicio: ${route.features[0].properties.H_INIC_SD}` } <br/>
                                            {`Final: ${route.features[0].properties.H_FIN_SD}` } <br/>
                                        </Popup>
                                    </GeoJSON>
                                </LayersControl.Overlay>
                            )
                        })}

                    </LayersControl>

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