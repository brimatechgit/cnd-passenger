import React, {useState} from 'react';
import { View, Text, TextInput, Pressable,Image } from 'react-native';
import {Card} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import PickUpInstructions from './PickUpInstructions/PickUpInstructionsPage';
import DropOffDetails from '../DropOffDetails/DropOfDetails';

const PickUpLocationDetails = props => {

    const [streetName, onChangeStreetName] = React.useState('');
    const [contact, onChangeContact] = React.useState('');
    const [complex, onChangeComplex] = React.useState('');
    const [buildingName, onChangeBuildingName] = React.useState('');
    const [streetNumber, onChangeStreetNumber] = React.useState('');

    const [placeVal, setPlaceVals] = useState('Apartment Name & unit No');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Complex / Estate', value: 'Complex'},
        {label: 'Apartment', value: 'Apartment'},
        {label: 'House', value: 'House'},
        {label: 'Office', value: 'Office'},
        {label: 'Hotel/B&B', value: 'Hotel/B&B'}
      ]);



      const changeVals = () => {
        if(value == 'Complex'){
            setPlaceVals('Complex Name & unit No');
        } else if( value == 'Apartment') {
            setPlaceVals('Apartment Name & unit No');
        } else if(value == 'Office') {
            setPlaceVals('Company name');
        } else if(value == 'Hotel/B&B') {
            setPlaceVals('Hotel name & room no');
        }
      }




    return ( 
        <View style={{flex: 1, padding: 15}}>
            <View >
            <View style={{flexDirection:'row'}}>
            <Image 
                            style={{width:35, height:35 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/pickUpPin.png')} />


                    <Text style={styles.title}>
                        <Text style={{fontWeight: 'bold'}}>Pick Up </Text>
                        
                         Location Details</Text>

            </View>
                
                <Text style={styles.subTitle}>We need full location details so we can pick up 
                        and drop off at accurate locations
                </Text>
            </View>

            <View>
            <Card style={{height: 420,padding:15, elevation: 5, marginTop: 15, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                   <View style={{alignItems:'center'}}>
                    <Image 
                            style={{width:105, height:105 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/pickUp.png')} />
                   </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={{fontSize: 15, padding: 10}}>Building Type</Text>
                            

                            <DropDownPicker
                            dropDownDirection={'BOTTOM'}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder='Apartment'
                                style={styles.dropdown}
                                onChangeValue={changeVals}
                                />

                        </View>
                        <View>

                        <View >
                            {

                                (value != 'House') ? <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeComplex}
                                    value={complex}
                                    placeholder={placeVal}
                                /> : null
                                
                            }

                        </View>

                        <View>
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetName}
                                value={streetName}
                                placeholder='Street Name & Street no'  
                            />

                        </View>

                        {/* <View >
                            {/* //should navigate to google search page 
                            {/* <Text>Address</Text> 
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetNumber}
                                value={streetNumber}
                                placeholder='Street No'  
                            />
                        </View> */}
                    


                        </View>


                        
                        <View style={{flexDirection: 'row',alignItems: 'center', padding: 10, }}>
                        <Image 
                            style={{width:45, height:45 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/document.png')} />
                            
                            <View style={{paddingHorizontal: 10}}>
                                <Text style={{alignItems: 'center', justifyContent: 'center', paddingRight: 20, left: 10, color: 'teal'}}>Add Pick Up Instructions</Text>
                            </View>
                           
                            <Pressable onPress={() => props.navigation.navigate(PickUpInstructions)} >
                            <Image 
                            style={{width:35, height:35 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/addSign.png')} />
                                </Pressable>
                           
                        </View>
                    </View>

                </Card>


                <View style={{height: 35}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(DropOffDetails)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View>
            </View>
        </View>
     );
}
 
export default PickUpLocationDetails;