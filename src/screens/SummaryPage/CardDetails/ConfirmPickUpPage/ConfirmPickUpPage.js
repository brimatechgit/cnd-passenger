import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ConfirmPickUp from '../../../../compnents/ConfirmPickUp/ConfirmPickUp';
import MapComponent from '../../../../compnents/MapComponent/MapComponent';


const ConfirmPickUpPage = ({navigation}) => {
    return ( 
        <View>
            <MapComponent></MapComponent>
            <ConfirmPickUp navigation={navigation}></ConfirmPickUp>
        </View>
     );
}
 
export default ConfirmPickUpPage;