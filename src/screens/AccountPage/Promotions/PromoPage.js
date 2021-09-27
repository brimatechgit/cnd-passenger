import React, {useState} from 'react'
import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';



const PromoPage = ({navigation}) => {

    const [code, onChangeCode] = React.useState("");

    return ( 
        <View style={{flex:1, padding: 10, alignItems:'center'}}>
            <View style={{alignItems:'center', padding: 15}}>
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Meet me half way</Text>
            </View>

            <View style={{borderRadius: 50, padding: 25, borderColor: 'red', borderWidth: 1, marginVertical: 10}}>
                <Text style={{fontSize:32}}>50%</Text>
                <Text style={{fontSize:32}}>OFF</Text>
            </View>

            <View>
                <Text style={styles.subTitle}>Enter Promo code to redeem</Text>
                <Text style={styles.subTitle}>the 50 percent off your delivery</Text>
            </View>

            <View>
            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCode}
                                value={code}
                                placeholder='Promo Code'
                                placeholderTextColor='teal'
                                fontSize={22}
                                keyboardType='number-pad'  
                            />
            </View>


            <View style={{paddingVertical: 35}}>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.button}>
                    {/* navigation.navigate(DestinationSearch) */}
                            <Text style={{color: 'teal', fontSize: 15}}>Send</Text>
                        
                    </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default PromoPage;