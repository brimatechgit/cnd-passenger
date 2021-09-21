import React from 'react'
import { View, Text,  } from 'react-native';
import ConfirmCard from '../../../compnents/ConfirmCard/CornfirmCard';
import MapComponent from '../../../compnents/MapComponent/MapComponent';


const ConfirmPage = ({navigation}) => {
    return ( 
        <View>
            <MapComponent navigation={navigation}></MapComponent>
            <ConfirmCard navigation={navigation}></ConfirmCard>
        </View>
     );
}
 
export default ConfirmPage;