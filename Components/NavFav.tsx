import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data: any = [
    {
        id: "123",
        icon: "home",
        location: "Casa",
        destination: "Saray Patricia, Santo Domingo, Dominican Republic"
    },
    {
        id: "321",
        icon: "briefcase",
        location: "Trabajo",
        destination: "Carrefour Market, Autopista Juan Pablo Duarte, Santo Domingo, Dominican Republic"
    }
]

const NavFav = () => {
    
    return (
        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>(
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={item.icon}
                type="ionicon"
                color="white"
                size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>
                        {item.location}
                    </Text>
                    <Text style={tw`text-gray-500`}>
                        {item.destination}
                    </Text>
                </View>
            </TouchableOpacity>

        )}
        ItemSeparatorComponent={()=><View style={[tw`bg-gray-200 h-1`,{height:0.5}]} />} />
    )
}

export default NavFav

const styles = StyleSheet.create({})
