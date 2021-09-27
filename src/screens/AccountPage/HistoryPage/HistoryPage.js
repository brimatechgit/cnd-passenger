import React from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import {Card}from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const HistoryPage = () => {
    return ( 
        <View style={{flex:1, padding: 10}}>
            <View style={{alignItems:'center', padding: 15}}>
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>History</Text>
            </View>

            <View>
                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{color: 'teal'}}>Last 30 Days</Text>
                            <Text>Last 90 Days</Text>
                        </View>
                </Card>

                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => console.log('hi')} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => console.log('hi')} ><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => console.log('hi')} ><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => console.log('hi')} ><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
            </View>


            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => console.log('navi')} style={styles.button}>
                        {/* navigation.navigate(DestinationSearch) */}
                                <Text style={{color: 'teal', fontSize: 15}}>Show More</Text>
                            
                        </TouchableOpacity>
            </View>


        </View>
     );
}
 
export default HistoryPage;