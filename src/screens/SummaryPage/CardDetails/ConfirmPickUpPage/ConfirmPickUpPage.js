import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ConfirmPickUp from '../../../../compnents/ConfirmPickUp/ConfirmPickUp';
import ConnectDriver from '../../../../compnents/ConnectDriver/ConnectDriver';
import MapComponent from '../../../../compnents/MapComponent/MapComponent';


const ConfirmPickUpPage = ({navigation}) => {
    return ( 
        <View>
            <MapComponent navigation={navigation}></MapComponent>
            {/* <ConfirmPickUp navigation={navigation}></ConfirmPickUp> */}
            <ConnectDriver navigation={navigation}></ConnectDriver>
        </View>
     );
}
 
export default ConfirmPickUpPage;