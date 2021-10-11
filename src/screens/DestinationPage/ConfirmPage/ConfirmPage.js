import React from 'react'
import { View, Text,  } from 'react-native';
import ConfirmCard from '../../../compnents/ConfirmCard/CornfirmCard';
import MapComponent from '../../../compnents/MapComponent/MapComponent';
import { useRoute, useNavigation } from '@react-navigation/native';


const ConfirmPage = ({navigation, props}) => {

    const route = useRoute();

    const {originPlace, destinationPlace} = route.params

    return ( 
        <View>
            <MapComponent navigation={navigation}></MapComponent>
            <ConfirmCard navigation={navigation} origin={originPlace} destination={destinationPlace} ></ConfirmCard>
        </View>
     );
}
 
export default ConfirmPage;