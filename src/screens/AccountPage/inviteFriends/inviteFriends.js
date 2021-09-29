import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Button from '../../../compnents/Button/Button';


const InviteFriendsPage = (props) => {
    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center', padding: 15}}>
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Invite Friends</Text>
            </View>

            <Icon name='persons' size={75}></Icon>

            <View style={{alignItems:'center', paddingVertical:15}}>
                <Text style={{fontWeight:'bold', fontSize:18, color:'teal', paddingVertical:5}}>Get free delivery!</Text>

                <Text style={{color:'teal', paddingVertical:5}}>Invite 10 friends and get 100% off your next delivery! </Text>    
                <Text style={{color:'teal', paddingVertical:5}}>Terms and Conditions Apply </Text>    
            </View>


            <Text style={{color:'gray', paddingVertical:5, letterSpacing:0.9}}>Expiration Date: 2021/09/18</Text>

            <Button text='Invite' navPage='' navigation={props.navigation}></Button>   
        </View>
     );
}
 
export default InviteFriendsPage;