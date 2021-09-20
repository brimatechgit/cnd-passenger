import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ConnectDriver from '../../../../../compnents/ConnectDriver/ConnectDriver';
import MapComponent from '../../../../../compnents/MapComponent/MapComponent';


const ConnectDriverPage = ({navigation}) => {
    return ( 
        <View>
            <MapComponent></MapComponent>
            <ConnectDriver navigation={navigation}></ConnectDriver>
        </View>
     );
}
 
export default ConnectDriverPage;