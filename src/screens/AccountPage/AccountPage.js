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
// import { FAB } from 'react-native-paper';
import styles from './styles';

const AccountPage = props => {
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


                <Pressable onPress={() => props.navigation.navigate(AccountCardDetailsPage)}>
                    <Card style={{elevation: 10, paddingVertical: 10}}>

                        <View style={{flexDirection: 'row'}}>

                    <View style={styles.leadIcon}><Icon name="card" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Payment Method</Text>
                        </View>
                        </View>
                    </Card>
                </Pressable>

                    <View style={{padding: 5, flexDirection: 'row', elevation: 10, justifyContent: 'space-between'}}>
                        <View style={styles.leadIcon}><MIcon name="support-agent" size={30}></MIcon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Promotion</Text>
                        <Pressable onPress={() => props.navigation.navigate(PromotionPage)} style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </View>
                    
                    
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="stats-chart" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>History</Text>
                        <Pressable onPress={() => props.navigation.navigate(HistoryPage)} style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </View>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="md-newspaper-sharp" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>About</Text>
                        <Pressable onPress={() => props.navigation.navigate(AboutPage)} style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </View>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="key" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Change Password</Text>
                        <Pressable onPress={() => props.navigation.navigate(ChangePassword)} style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </View>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="person-add" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Invite Friends</Text>
                        <Pressable onPress={() => props.navigation.navigate(PromotionPage)} style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </View>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><MaterialIcons name="support-agent" size={30}></MaterialIcons></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Support</Text>
                        <Pressable onPress={() => props.navigation.navigate()} style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </View>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="shield" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Safety Centre</Text>
                        <Pressable onPress={() => props.navigation.navigate(SafetyPage)} style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </View>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="log-out" size={30} color='red'></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Log out</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => console.log('Pressed')}>
    </FAB> */}
        </View>
     
     
     
     );
}
 
export default AccountPage;