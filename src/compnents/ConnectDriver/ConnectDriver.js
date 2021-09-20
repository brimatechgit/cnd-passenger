import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ConnectDriver = () => {
    return ( 
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                {/* get username here */}
                <Text style={{fontSize: 22, color: 'teal'}}>Connecting to the driver</Text>
                <View style={{height: 10}}></View> 
            </View>
            
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold'}}>Clickie | SNH 55GP</Text>

                
            </View>
            <View style={{height: 5}}></View>
            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.leadIcon}><Icon name="person" size={30}></Icon></View>
                        <Text>Drivers Name</Text>      
                    </View>
                    <View style={{width: '25%'}}></View>
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.leadIcon}><Icon name="close" color='red' size={30}></Icon></View>
                        <Text>Cancel Pick Up</Text>      
                    </View>
            </View>
            
        </View>
     );
}
 
export default ConnectDriver;