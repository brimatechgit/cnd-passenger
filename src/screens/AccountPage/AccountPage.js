import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AboutPage from './AboutPage/AboutPage';
import AccountCardDetailsPage from './AccountCardDetails/AccountCardDetails';
import ChangePassword from './ChangePassword/ChangePassword';
import HistoryPage from './HistoryPage/HistoryPage';
import PromotionPage from './Promotions/PromotionPage';
import SafetyPage from './Safety Centre/SafetyPage';
import SupportChat from './SupportChat/SupportChat';
import Modal from "react-native-modal";
import styles from './styles';
import InviteFriendsPage from './inviteFriends/inviteFriends';
import HomePage from '../HomePage/HomePage';

const AccountPage = props => {

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return ( 
        <View>

            <View style={{height: "35%", backgroundColor: 'teal', }}>
                <View style={{top: "18%", flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{borderRadius: 50, backgroundColor: 'white', width: 80, height: 80, alignItems:'center', justifyContent: 'center'}}>
                        <Icon name='person' size={40} style={{color:'teal'}}></Icon>
                    </View>
                    <View style={{justifyContent: 'center', padding: 20}}>
                        <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>Name and Surname</Text>
                        <Text style={{color: 'white', fontSize: 15}}>name@gmail.com | Mobile</Text>
                    </View>
                </View>
            </View>
            <View>

                <View>


                <Pressable >
                    <Card style={{elevation: 10, paddingVertical: 10}} onPress={() => props.navigation.navigate(AccountCardDetailsPage)}>

                        <View style={{flexDirection: 'row'}}>

                    <View style={styles.leadIcon}><Icon name="card" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Payment Method</Text>
                        </View>
                        </View>
                    </Card>
                </Pressable>

                    <Pressable onPress={() => props.navigation.navigate(PromotionPage)} style={{padding: 5, flexDirection: 'row', elevation: 10, justifyContent: 'space-between'}}>
                        <View style={styles.leadIcon}><MIcon name="support-agent" size={30}></MIcon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Promotion</Text>
                        <View  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></View>
                        </View>
                    </Pressable>
                    
                    
                    <Pressable onPress={() => props.navigation.navigate(HistoryPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="stats-chart" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>History</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate(AboutPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="md-newspaper-sharp" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>About</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate(ChangePassword)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="key" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Change Password</Text>
                        <Pressable style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate(InviteFriendsPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="person-add" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Invite Friends</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    
                    <Pressable onPress={() => props.navigation.navigate(SupportChat)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><MaterialIcons name="support-agent" size={30}></MaterialIcons></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Support</Text>
                        <Pressable style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    
                    <Pressable onPress={() => props.navigation.navigate(SafetyPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="shield" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Safety Centre</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={onPress={toggleModal}} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="log-out" size={30} color='red'></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Log out</Text>
                        </View>
                    </Pressable>
                </View>
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
                                        Are you sure you want to Log out?
                                    </Text>
                                
                                
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

            
        </View>
     
     
     
     );
}
 
export default AccountPage;