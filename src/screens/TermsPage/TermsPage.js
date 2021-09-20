import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {Card} from 'react-native-paper';
import IconIonic from 'react-native-vector-icons/Ionicons';
import TermsAndCo from '../../compnents/TermsAndC/TermsAndC';


const TermsPage = props => {
    return ( 
        <View style={{flex:1, padding: 15}}>
            <Text style={{fontSize: 22, fontWeight: '600'}}>Legal</Text>
            <View style={{height: 20}}></View>
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Sender Agreement'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 20}}>

                        <Text>Sender Agreement</Text>
                        <IconIonic name='chevron-forward' size={15}></IconIonic>
                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Reciever Agreement'})}>

                <Card style={{margin: 10,borderRadius: 25, elevation: 5}}>
                    <View style={{flexDirection:'row',  justifyContent: 'space-between', padding: 20}}>
                        <Text>Reciever Agreement</Text>
                        <IconIonic name='chevron-forward' size={15}></IconIonic>

                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Personal Information'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 20}}>

                        <Text>Personal Information</Text>
                        <IconIonic name='chevron-forward' size={15}></IconIonic>
                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Anti-Fraud Policy'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    
                <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 20}}>
                    <Text>Anti-Fraud Policy</Text>
                    <IconIonic name='chevron-forward' size={15}></IconIonic>
                </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Compliant Handling Policy'})}>
                
                <Card style={{margin: 10, borderRadius: 25, elevation: 5}}>
                <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 20}}>
                    <Text>Compliant Handling Policy</Text>
                    <IconIonic name='chevron-forward' size={15}></IconIonic>
                </View>
                </Card>
            </Pressable>
            
        </View>
     );
}
 
export default TermsPage;