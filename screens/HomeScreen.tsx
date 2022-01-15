import React from 'react'
import { StyleSheet, Text, SafeAreaView,View,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../Components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import { useDispatch } from 'react-redux';
import {setDestination,setOrigin} from '../slices/navSlice'
import NavFav from '../Components/NavFav';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                style={{width: 100, height: 100,resizeMode:'contain'}}
                source={{
                    uri:"https://logodownload.org/wp-content/uploads/2015/05/uber-logo-4-1.png"
                }}
                />
                <GooglePlacesAutocomplete
                styles={{
                    container:{
                        flex:0
                    },
                    textInput:{
                        fontSize:18
                    }
                }}
                    placeholder="Desde donde?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                      }}
                    fetchDetails={true}  
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        console.log('Details:');
                        console.log(details);
                        dispatch(setOrigin({
                            location: details?.geometry.location,
                            description: data.description
                        }));
                        dispatch(setDestination(null));
                    }}  
                />
                <NavOptions />
                <NavFav />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
