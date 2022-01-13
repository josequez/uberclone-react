import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';
import {useSelector} from 'react-redux'

const Map = () => {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={tw`flex-1`}
                mapType='mutedStandard'
                region={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
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
                </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})
