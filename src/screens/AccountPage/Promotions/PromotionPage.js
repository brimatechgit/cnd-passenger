import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Card}from 'react-native-paper';
import PromoPage from './PromoPage';
import styles from './styles';

const PromotionPage = props => {
    return ( 
        <View style={{flex:1, padding: 10}}>
            <View style={{alignItems:'center', padding: 15}}>
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Card Details</Text>
            </View>

            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{...styles.text, }}>New Promotions</Text>
                </View>
                <Card style={styles.promoCard} onPress={() => props.navigation.navigate("PromoPage", {title: 'Meet me halfway'})}>
                        
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text>Meet me halfway</Text>
                            </View>
                        
                    </Card>
                    {/* props.navigation.navigate() */}
                    <Card style={styles.promoCard}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("PromoPage" , {title: 'Invite friends'})}>
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text>Invite friends</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
            </View>


            <View>
                <View style={{alignItems: 'center'}}>

                    <Text style={{...styles.text, }}>Promotions Expiring in 3 Days</Text>
                </View>

                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Old Promo</Text>
                        </View>
                </Card>
                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Old Promo</Text>
                        </View>
                </Card>
                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Old Promo</Text>
                        </View>
                </Card>
                {/* props.navigation.navigate() */}
                
                
            </View>
        </View>
     );
}
 
export default PromotionPage;


