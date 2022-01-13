import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/core';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';
import {useSelector} from 'react-redux'

const NavOptions = () => {
    const data = [
        {
            id: '1',
            title: 'Let\'s go for a ride',
            image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
            screen: 'MapScreen'
        },
        {
            id: '2',
            title: 'I\'m hungry Let\'s order food',
            image: 'https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png',
            screen: 'EatsScreen'
        }
    ]

    //Adding this type allows TS to accept item.screen : string as param.
    const navigation : NavigationProp<ParamListBase> = useNavigation();
    const origin = useSelector(selectOrigin);
    let anyHasValue = function(x:any): boolean{
        if(x){
            return true;
        }
        return false;
    }
    return (
        <FlatList
        horizontal
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
            <TouchableOpacity 
            onPress={()=>navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}>
                
                <View style={tw`${(!origin)? "opacity-20" : ''}`}>
                    <Image 
                    style={{width:120, height: 120, resizeMode: 'contain'}}
                    source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright" color="white" type="antdesign" />
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions

