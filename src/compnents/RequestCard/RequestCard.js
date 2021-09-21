import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Card}from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import PickUpLocationDetails from '../../screens/DestinationPage/PickUpDetails/PickUpDetails';
import ConnectDriverPage from '../../screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConnectDriverPage/ConnectDriverPage';
import styles from './styles';

const RequestCard = props => {
    return ( 
        <View style={styles.container}>
           
            <View style={{height: 5}}></View>

            
            


            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    {/* <View style={styles.circle} /> */}

                    <Card style={{borderRadius: 50, justifyContent: 'center', alignItems:'center', width: 45, height: 45}}>
                        <Icon name='directions-car' size={30}></Icon>
                    </Card>
                    
                <Card style={{elevation: 5, borderRadius: 25, padding:2, width: '75%', margin: 5}}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>

                        <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold', paddingLeft: 10}}>453 Unicon Villy</Text>
                            
                            <Card style={{borderRadius: 50, elevation: 4, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                </View>
                                
                                </Card>
                            
                        </View>
                </Card>
                    
                </View>

                <View style={{height: 5}}></View>

                    <TouchableOpacity onPress={() => props.navigation.navigate(PickUpLocationDetails)} style={styles.button}>
                    
                            <Text style={{color: 'teal', fontSize: 15}}>Request</Text>
                        
                    </TouchableOpacity>
            
        </View>
     );
}
 
export default RequestCard;