import React from 'react';
import { View, Text,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';



const AboutPage = () => {

    const cndAbout = 'ClicknDeliver is an application that has been developed to provide simplicity, accuracy, speed, and convenience at the click of a fingertip to ensure that small to medium seized packages are delivered with less worries. ';

    const cndAbout2 = 'The App allows the customer to instantaneously place an order for a courier service to pick up and deliver the parcel to any off the selected locations where the App is currently available';

    return ( 
        <View style={{flex:1, padding: 10}}>
            <View style={{alignItems:'center', padding: 15}}>
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Card Details</Text>
            </View>

            <View>
                <Text>{cndAbout}</Text>
                <Text>{cndAbout2}</Text>

                <TouchableOpacity onPress={() => console.log('jel')} style={styles.button}>
                    {/* navigation.navigate(DestinationSearch) */}
                            <Text style={{color: 'teal', fontSize: 15}}>Read More</Text>
                        
                    </TouchableOpacity>
            </View>

            <View>
                <Text>Please rate the app/service</Text>

                <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                    {/* star icons here */}
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                    <Icon></Icon>
                    <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCardName}
                                value={cardName}
                                placeholder='Comment'
                                keyboardType='default'
                                color='teal'  
                            />
                </View>
            </View>

        </View>
     );
}
 
export default AboutPage;