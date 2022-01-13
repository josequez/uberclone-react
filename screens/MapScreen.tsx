import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from '../Components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../Components/NavigateCard';
import RideOptionCard from '../Components/RideOptionCard';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen 
                    name='NavigationCard'
                    component={NavigateCard}
                    options={{headerShown:false}}/>
                    <Stack.Screen 
                    name='RideOptionCard'
                    component={RideOptionCard}
                    options={{headerShown:false}}/>
                </Stack.Navigator>
            </View>
        </View>
        
    )
}

export default MapScreen

const styles = StyleSheet.create({})
