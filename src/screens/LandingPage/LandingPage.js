import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Card from 'react-native-paper';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import styles from './styles';

const LandingPage = props => {
    return ( 
        <View style={{flex: 1, alignItems:'center'}}>
            <View style={{height: '80%', alignItems: 'center', justifyContent: 'center'}}>
            <Image 
style={{flex: 1, }}
  resizeMode = 'contain'
source={require('../../assets/images/landingLogo.png')} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center'}}>

                <Text style={{color: 'teal', fontSize: 22}}>Welcome To ClicknDeliver</Text>
            </View>

            <View style={{height: 15}}></View>

            <View style={{flexDirection: 'row'}}>
                
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250, left: 50}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(LoginPage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Sign In</Text>
                        </Pressable>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250, right:50  }}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(RegisterPage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Sign Up</Text>
                        </Pressable>
                    </View>
            </View>


        {/* <View style={{
    marginBottom: 36}}>
        
           
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250 }}>
                        <Pressable style={styles.button} onPress={() => console.log('sign in')}>
                            <Text style={{color: 'black', fontSize: 20}}>Sign In</Text>
                        </Pressable>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250}}>
                        <Pressable style={styles.button} onPress={() => console.log('sign in') }>
                            <Text style={{color: 'black', fontSize: 20}}>Start Drive</Text>
                        </Pressable>
                    </View>
                </View>
         

        </View> */}
        </View>
     );
}
 
export default LandingPage;