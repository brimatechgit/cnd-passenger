import React from 'react';
import { View,Text, Pressable} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';

const SafetyPage = () => {
    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 22, fontWeight: '600'}}>Safety Centre</Text>
            </View>

            <View style={{paddingTop: 15}}>
                <Text style={{fontSize: 22, color:'teal'}}>Contact the local authorities</Text>
                <Text style={{fontSize: 12, color:'teal', textAlign:'center'}}>Share your trip Information with the authority</Text>


                <View style={{paddingVertical: 15}}>
                    

                    <View style={{flexDirection:'row',  marginVertical: 10}}>
                        <Card style={{borderRadius: 60, marginHorizontal: 10, width: 45, height: 45, alignItems: 'center', justifyContent: 'center',}}><Octicons name='primitive-dot' size={25} style={{top:10}} color='teal'></Octicons></Card>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text>Current Location</Text>
                                <Text style={{fontWeight:'bold'}}>Jetline West</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>


            <View style={{justifyContent:'center', alignItems:'center'}}>
                <View style={{justifyContent: 'center',alignItems:'center', width: 500, paddingVertical: 10}}>
                    <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                        <Text style={{color: 'white', fontSize: 20}}>Dial 10111</Text>
                        <Icon name='chevron-forward-outline' size={18}></Icon>
                    </Pressable>
                </View>
                <View style={{justifyContent: 'center',alignItems:'center', width: 500, paddingVertical: 10}}>
                    <Pressable style={[styles.button, {backgroundColor: 'teal'}]} onPress={() => props.navigation.pop()}>
                        <Text style={{color: 'white', fontSize: 20}}>Dial 001 553 5556</Text>
                        <Icon name='chevron-forward-outline' size={18}></Icon>
                    </Pressable>
                </View>
            </View>
        </View>
     );
}
 
export default SafetyPage;