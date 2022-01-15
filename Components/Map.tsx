import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import {useSelector} from 'react-redux'
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    const originxy = { latitude: origin.location.lat, longitude: origin.location.lng};
    const destinationxy = { latitude: destination.location.lat, longitude: destination.location.lng };
    console.log(origin.description);
    console.log(destination.description);
    const mapRef = useRef<any | null>(null);

    useEffect(() => {
        //mapRef.current.fitToSuppliedMarkers()
        if(!origin || !destination) {return;}
        //Zoom al extremo
        mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
            edgePadding: {top : 50, right: 50, bottom: 50, left: 50}
        });
        
    }, [originxy,destinationxy])
    return (
        <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                ref={mapRef}
                style={tw`flex-1`}
                mapType='mutedStandard'
                region={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                    {origin && destination && (
                        <MapViewDirections 
                        origin={originxy}
                        destination={destinationxy}
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={3}
                        strokeColor='purple'
                        />
                    )}
                    {origin?.location &&(
                        <Marker 
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                        }}
                        title='Origen'
                        identifier='origin'
                        description={origin.description}/>
                    )}
                    {destination?.location &&(
                        <Marker 
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }}
                        title='Destino'
                        identifier='destination'
                        description={destination.description}/>
                    )}
                </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})
