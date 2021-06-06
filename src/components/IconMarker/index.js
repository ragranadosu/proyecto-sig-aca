import React from 'react';
import IconSvg from '../../assets/venue_location_icon.svg';
import L from 'leaflet';

const IconMarker = L.icon({
    iconUrl: IconSvg,
    iconRetinaUrl: IconSvg,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "Leaflet-vanue-icon"
})

export default IconMarker;