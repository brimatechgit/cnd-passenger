import React from 'react'
import { View,Text,Pressable } from 'react-native';
import {Card}from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const HistorySummary = () => {
    return ( 
        <View style={{flex:1, padding:10}}>
            <View>
            <Card style={{padding:25, height: '75%',borderRadius:25, elevation: 5}}>

                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 65}}>
                    <Text style={styles.titleText}>Delivered by Dirvers Name</Text>
                    <Icon name='person' color='teal' size={22}></Icon>
                </View>
                
                <Text style={styles.innerText}>Date: 2021/09/16</Text>
                
                    <Text style={styles.innerText}>Time: 13:55</Text>
                    <Text style={styles.innerText}>Distance: 5km</Text>
              


                <View style={{paddingVertical: 15}}>
                    <Text style={styles.titleText}>Small Parcel</Text>
                    <View style={{paddingVertical: 10}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.circle}></View>
                            <Text style={styles.innerText}>Pick up address</Text>
                        </View>
                        <Text style={styles.subTitle}>234 Brima Rd. Villy estate 1459</Text>
                    </View>
                    <View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.circle}></View>
                            <Text style={styles.innerText}>Drop off address</Text>
                        </View>
                        <Text style={styles.subTitle}>5 Marlin Rd. Jet park boksburg 1459</Text>
                    </View>
                </View>


                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 45}}>
                    <Text style={{color:'teal'}}>Amount to be paid</Text>
                    <Text style={{fontWeight:'bold', color:'teal'}}>R60</Text>
                </View>
            </Card>
            </View>

            <View style={{position:'absolute', width: '100%', top: '1%'}}>

                <Card style={{elevation: 10,  left: '2%',alignItems:'center', borderRadius: 25, padding: 10}}>
                    <Text style={styles.title}>History</Text>
                </Card>
            </View>
            
        </View>
     );
}
 
export default HistorySummary;