import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ConnectDriver = () => {
    return ( 
        <View style={styles.container}>
            
            <View style></View>
            <View style={{flexDirection:'row', paddingTop: 25}}>
                <Text style={{color:'teal', fontSize: 22, fontWeight: 'bold'}}>Clickie | SNH 55GP</Text>

                
            </View>
            <View style={{height: 5}}></View>
            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.leadIcon}><Icon name="person" size={30}></Icon></View>
                        <Text>Drivers Name</Text>      
                    </View>
                    <View style={{flexDirection:'column', paddingHorizontal: 25}}>
                        <View style={styles.leadIcon}><Icon name="close" color='red' size={30}></Icon></View>
                        <Text>Cancel Pick Up</Text>      
                    </View>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <View style={[styles.leadIcon, {left: 0}]}><Icon name="md-chatbubbles" color='teal' size={30}></Icon></View>
                        <Text>Chat</Text>      
                    </View>
            </View>
            
        </View>
     );
}
 
export default ConnectDriver;