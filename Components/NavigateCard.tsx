import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

//Paso como parametro a props, asi typeScript me deja usar el navigate...
const NavigateCard = (props: any) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Hola</Text>
            <View style={tw`border-t border-gray-200 flex-shrink p-3`}>
                <View>
                    <GooglePlacesAutocomplete 
                    placeholder='A donde?'
                    styles={aDondeInputStyle}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                      }}
                    fetchDetails={true}  
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    onPress={(data,details=null)=>{
                        dispatch(setDestination({
                            location: details?.geometry.location,
                            description: data.description
                        })
                        
                        );
                        console.log('Destino:',data.description);
                        //En lugar de navigation.navigate, uso props.navigation.navigate...
                        //Pequeno hack para typeScript me deje tranquilo...
                        props.navigation.navigate('RideOptionCard')

                    }}

                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const aDondeInputStyle = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContariner: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
