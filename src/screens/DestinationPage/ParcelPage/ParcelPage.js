import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import RequestCard from '../../../compnents/RequestCard/RequestCard';
import AccountPage from '../../AccountPage/AccountPage';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const ParcelPage = () => {
    return ( 
        <View>

            <View>
                <MapView style={styles.map} 
                
                style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{ 
            latitude: -26.16299249170051,
            longitude: 28.225375324978117,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
        }}
                >

            <Marker
            coordinate={{
                latitude: -26.16299249170051,
                longitude: 28.225375324978117,}}
            ></Marker>

            
            
                </MapView>
                <TouchableOpacity style={styles.overlay} onPress={() => props.navigation.navigate(AccountPage)}>
                <Icon name='menu' size={35} color='white'></Icon>
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Card style={{elevation: 5, borderRadius: 25, padding:2, width: '85%', margin: 5}}>
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>

                            <View style={styles.circle} />

                            <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold', paddingLeft: 10}}>453 Unicon Villy</Text>
                               
                            </View>
                    </Card>
                </View>
            </View>
            
        <RequestCard></RequestCard>
        </View>
     );
}
 
export default ParcelPage;