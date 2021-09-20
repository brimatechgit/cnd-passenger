import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import DestinationSearch from '../../screens/DestinationPage/DestinationPage';
import styles from './styles';


const BottomHomeNav = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                {/* get username here */}
                <Text style={{fontSize: 22, color: 'teal'}}>Hi J,</Text>
                <View style={{height: 10}}></View> 
                <Text style={{textAlign: 'center', color: 'teal', fontWeight: 'bold', fontSize: 15}}>Where would you like us to pick up & drop Off your parcel?</Text>
            </View>
            <View style={{height: 10}}></View>
            

                    <TouchableOpacity onPress={() => navigation.navigate(DestinationSearch)} style={styles.button}>
                    {/* navigation.navigate(DestinationSearch) */}
                            <Text style={{color: 'teal', fontSize: 15}}>Where Are You?</Text>
                        
                    </TouchableOpacity>
            
        </View>
     );
}
 
export default BottomHomeNav;