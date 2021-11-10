import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) =>{
    const [map, setMap] = useState(null);
    const { google, query } = props;

    useEffect(() =>{
        if(query){
            serarchByQuery(query);
        }
    }, [query] )

    function serarchByQuery(query){
        const service = new google.maps.places.PlacesService(map);

        const requests = {
            location: map.center,
            radius: '200',
            type:['whorehouse night_club'],
            query,
        };

        service.textSearch(requests, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log('restaurants>>>', results);
            }
        });
    }

    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map);

        const requests = {
            location: center,
            radius: '20000',
            type:['whorehouse night_club'],
        };

        service.nearbySearch(requests, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log('restaurants>>>', results);
            }
        });
    }

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center);

    }

    return <Map google={ google } centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady}/>
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language:'pt-BR',
})(MapContainer);