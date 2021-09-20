import React from 'react';
import { View, Text, Pressable } from 'react-native';
import  {Card } from 'react-native-paper';
import LoginPage from '../../LoginPage/LoginPage';
import styles from './styles';

const ApprovalPage = props => {
    return ( 
        <View style={{justifyContent: 'center', padding: 25, alignItems: 'center'}}>
            
            <View style={{alignItems:'flex-start', paddingBottom: 25}}>
            <Text style={{fontSize: 22, color: 'teal'}}>Registration Successful</Text>

            </View>

            <Card style={{height: 320, borderRadius: 25, width: '100%', elevation: 8, borderColor: 'teal'}}>
                <View style={{height: 150, elevation: 6, backgroundColor: 'teal', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderWidth: 1, borderColor: 'teal'}}>
                    <Text style={{color: 'white', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 25, top: '40%'}}>woohoo</Text>
                </View>
                <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}> 

                <Text style={{width: '85%', top: '80%', justifyContent: 'center', textAlign: 'center', fontSize: 18, color: 'teal'}}>Congratulations your Account has been registered</Text>
                </View>
            </Card>


            {/* start drive button here */}
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, top: 45, width: "85%" }}>
                <Pressable style={styles.button} onPress={() => props.navigation.navigate(LoginPage)}>
                    <Text style={{color: 'teal', fontSize: 20, }}>Continue</Text>
                </Pressable>
            </View>
            
        </View>
     );
}
 
export default ApprovalPage;