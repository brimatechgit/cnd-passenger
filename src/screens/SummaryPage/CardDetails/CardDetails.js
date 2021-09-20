import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import {Card}from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  IconIon  from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useLinkProps } from '@react-navigation/native';
import HomePage from '../../HomePage/HomePage';
import BottomHomeNav from '../../../compnents/BottomHomeNav/BottomHomeNav';
import ConfirmCard from '../../../compnents/ConfirmCard/CornfirmCard';
import ConfirmPickUp from '../../../compnents/ConfirmPickUp/ConfirmPickUp';
import ConfirmPickUpPage from './ConfirmPickUpPage/ConfirmPickUpPage';



const CardDetailsPage = props => {

    const [cardNum, onChangeCardNum] = React.useState("");
    const [expDate, onChangeExpDate] = React.useState("");
    const [cvv, onChangeCvv] = React.useState("");

    return ( 
        <View style={{flex:1, padding: 10}}>
            <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Add Card Details</Text>

            <Card style={{borderRadius: 25, elevation: 10, height: 250, padding: 15}}>
                <Text style={{fontWeight:'100', padding: 5}}>Card Number</Text>
                <Card style={{elevation: 10, borderRadius: 25, padding:2}}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCardNum}
                                value={cardNum}
                                placeholder='0000 0000 0000 0000'
                                keyboardType='number-pad'  
                            />
                            
                            <Card style={{borderRadius: 50, elevation: 10, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                </View>
                                
                                </Card>
                            
                        </View>
                </Card>


                <View style={{height: 10}}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View>
                        <Text>Expiry Date</Text>
                        <Card style={{width: 100, borderRadius: 50, elevation: 5}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeExpDate}
                                value={expDate}
                                placeholder='MM/YY'
                                keyboardType='number-pad' 
                                maxLength={4} 
                            />
                        </Card>
                    </View>
                    <View>
                        <Text>Security Code</Text>
                        <Card style={{width: 100, borderRadius: 50, elevation: 5}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCvv}
                                value={cvv}
                                placeholder='CVV'
                                keyboardType='number-pad' 
                                maxLength={3} 
                            />
                        </Card>
                    </View>
                </View>


                <View style={{height: 15}}></View>

                <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'teal', fontSize: 10,alignItems: 'center'}}>We need to verify your card on your banking App</Text>

                </View>
            </Card>

            <View style={{height: 35}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(ConfirmPickUpPage)}>
                        {/* props.navigation.navigate(ConfirmPickUpPage) */}
                            <Text style={{color: 'teal', fontSize: 20}}>Proceed to Pay</Text>
                        </Pressable>
                    </View>

                    <View style={{height: 15}}></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                        
                            <Icon name='security' size={22} color='green'></Icon>
                        </View>
                        
                            
                        <Text style={{color: 'teal', fontSize: 12,alignItems: 'center'}}>Secured with SSL encryption technology</Text>
                    </View>
        </View>
     );
}
 
export default CardDetailsPage;