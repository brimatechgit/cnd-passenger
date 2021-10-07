import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from "react-native-modal";
import styles from './styles';
import HomePage from '../../screens/HomePage/HomePage';
import ChatPage from './ChatPage/ChatPage';

const ConnectDriver = (props) => {


    const [isModalVisible, setModalVisible] = React.useState(false);
    const [isChatVisible, setChatVisible] = React.useState(false);
    const [chatState, setChatState] = React.useState(false);
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const toggleChat = () => {
        setChatState(!chatState);
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Driver is lost', value: 'Driver is lost'},
        {label: 'Driver took too long', value: 'Driver took too long'},
        {label: 'Other', value: 'Other'}
      ]);

      const chatPage = () => {
          <View style={styles.container}>
              <Text>Text hereeeee</Text>
          </View>
      }


    return ( 
        <View style={styles.container}>

            {
                chatState ? chatPage() : <View></View>
            }
            
            <View></View>
            <View style={{flexDirection:'row', paddingTop: 25}}>
                <Text style={{color:'teal', fontSize: 22, fontWeight: 'bold'}}>CnD-Motor | SNH 55GP</Text>

                
            </View>
            <View style={{height: 5}}></View>
            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.leadIcon}><Icon name="person" size={30}></Icon></View>
                        <Text>Drivers Name</Text>      
                    </View>
                    <Pressable onPress={toggleModal} style={{flexDirection:'column', paddingHorizontal: 25}}>
                        <View style={styles.leadIcon}><Icon name="close" color='red' size={30}></Icon></View>
                        <Text>Cancel Pick Up</Text>      
                    </Pressable>


                    <Pressable onPress={toggleChat} style={{flexDirection:'column', alignItems:'center'}}>
                        <View style={[styles.leadIcon, {left: 0}]}><Icon name="md-chatbubbles" color='teal' size={30}></Icon></View>
                        <Text>Chat</Text>      
                    </Pressable>
            </View>



            <Modal isVisible={isModalVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                left: 10,
                                height: 300,
                                width: 300,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                <View style={{padding: 10, alignItems:'center'}}>
                                    <Text style={{fontSize: 18, fontWeight:'bold', paddingVertical: 10, color:'red'}}>Cancel Your Pick up</Text>

                                    <Text style={{textAlign:'center'}}>
                                        Are you sure you want to Cancel Your Pick up with John?
                                    </Text>
                                    
                                    <View style={{ paddingTop:10}}>
                                        
                                    <DropDownPicker
                                dropDownDirection={"TOP" }
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder='Reason for cancelling'
                                style={styles.dropdown}
                                />
                                    </View>
                                
                                
                                </View>

                                <View style={{flexDirection:'row'}}>

                                    <TouchableOpacity onPress={toggleModal} style={[styles.button, {margin:5}]}>
                        
                                        <Text style={{color: 'teal', fontSize: 15}}>No</Text>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {props.navigation.navigate(HomePage),  setModalVisible(false)}} style={[styles.button, {margin:5}]}>
                        
                                        <Text style={{color: 'teal', fontSize: 15}}>Yes, Cancel</Text>
                                    
                                    </TouchableOpacity>
                                </View>

                            </View>


                    
                    </Modal>
            <Modal isVisible={isChatVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                height: 300,
                                width: 300,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#ccc',
                                position: 'absolute',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                
                                    

                            </View>


                    
                    </Modal>
            
        </View>
     );
}
 
export default ConnectDriver;