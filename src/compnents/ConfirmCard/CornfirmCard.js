import React from 'react';
import { View, Text, Pressable  } from 'react-native';
import Card from 'react-native-paper';


const ConfirmCard = () => {
    return ( 
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Confirm Pick Up</Text>

            <View style={{flexDirection:'row'}}>
                <Text style={{color:'teal', fontSize: 22, fontWeight: 'bold'}}>Pick Up in 5min | R60 | Clickie </Text>

                
            </View>
            <View style={{justifyContent:'center'}}>
                    {/* dot icon here */}

                    <Text> Unicon Villy</Text>
                </View>
        </View>
     );
}
 
export default ConfirmCard;