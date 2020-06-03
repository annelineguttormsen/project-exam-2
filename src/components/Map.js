import React from 'react';
import L from 'leaflet';

// https://cherniavskii.com/using-leaflet-in-react-apps/

class Map extends React.Component {
    componentDidMount() {
        this.map = L.map('map', {
            center: [50, 10],
            zoom: 13,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
    }
    componentDidUpdate() {
        let nlat, nlong;
        //props er undefined på første render, oppdater
        //map når koordinatene kommer gjennom
        if (this.props.lat === undefined) {
            nlat = 50;
            nlong = 10;
        } else {
            nlat = this.props.lat;
            nlong = this.props.long;
        }
        this.map.panTo({lat: nlat, lng: nlong});
        this.marker = L.marker({lat: nlat, lng: nlong}).addTo(this.map);
    }

    render() {
        return <div id="map"></div>
    }
}

export default Map;