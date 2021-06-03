import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Icon from './IconMarker';
import 'leaflet/dist/leaflet.css'

const MapView = () => {
    return (
        <MapContainer center={[13.6527, -88.8684]} zoom={9} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[13.6527, -88.8684]} icon={ Icon }>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapView