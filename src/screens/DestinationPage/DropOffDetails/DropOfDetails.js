import React, {useState} from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import {Card} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import DropOffInstruction from './DropOffInstructions/DropOffInstructions';
import SummaryPage from '../../SummaryPage/SummaryPage';
import ParcelPage from '../ParcelPage/ParcelPage';

const DropOffDetails = props => {

    const [streetName, onChangeStreetName] = React.useState('');
    const [contact, onChangeContact] = React.useState('');
    const [complex, onChangeComplex] = React.useState('');
    const [buildingName, onChangeBuildingName] = React.useState('');
    const [streetNumber, onChangeStreetNumber] = React.useState('');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Complex / Estate', value: 'Complex'},
        {label: 'Apartment', value: 'Apartment'},
        {label: 'Hotel', value: 'Hotel'}
      ]);

    return ( 
        <View style={{flex: 1, padding: 15}}>
            <View>
                <Text style={styles.title}>
                    <Text style={{fontWeight:'bold', elevation:5}}>Drop Off</Text> Location Details</Text>
                <Text style={styles.subTitle}>We need full location details so we 
                    can pick up and drop off at accurate location
                </Text>
            </View>

            <View>
            <Card style={{height: 440,padding:15, elevation: 5, marginTop: 15, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>

                    <View style={{alignItems:'center'}}>
                       <Icon name='people' size={60}></Icon>
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={{fontSize: 15, padding: 10}}>Building Type</Text>
                            

                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder='Complex / Estate'
                                style={styles.dropdown}
                                />

                        </View>
                        <View>

                        <View>
                            {/* <Text></Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeComplex}
                                value={complex}
                                placeholder='Unit no & complex Name'
                            />

                        </View>
                        
                        
                        
                        
                        <View >
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetName}
                                value={streetName}
                                placeholder='Street Name'  
                            />

                        </View>
                        
                        <View>
                            {/* //should navigate to google search page */}
                            {/* <Text>Address</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetNumber}
                                value={streetNumber}
                                placeholder='Street No'  
                            />
                        </View>


                        <View>
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeContact}
                                value={contact}
                                placeholder='Recipient Contact Details'
                                keyboardType='number-pad'  
                            />

                        </View>
                    


                        </View>


                        
                    </View>

                    <View style={{flexDirection: 'row',alignItems: 'center', padding: 10, }}>
                        <Card style={{borderRadius: 50, elevation: 10, padding: 5, }}><Icon name='md-document-text' size={40} color='teal'></Icon></Card>
                        <Text style={{alignItems: 'center', justifyContent: 'center', paddingRight: 20, left: 10, color: 'teal'}}>Add Pick Up Instructions</Text>
                        <Card style={{borderRadius: 50, elevation: 10, width: 25, height: 25, left: 25}}>
                        <Pressable onPress={() => props.navigation.navigate(DropOffInstruction)} >
                            <Icon name='add' size={15} color='teal' style={{top:5, left:5,justifyContent: 'center', alignItems: 'center'}}></Icon>
                            </Pressable>
                            </Card>
                    </View>
                </Card>


                <View style={{height: 35}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(ParcelPage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View>
            </View>
        </View>
     );
}
 
export default DropOffDetails;