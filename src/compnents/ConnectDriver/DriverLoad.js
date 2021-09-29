import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import styles from './styles';




const DriverLoad = () => {

    

    return ( 
        <View style={[styles.container, {height: '15%', top: '85%'}]}>
            <View style={{alignItems:'center', flexDirection:'row'}}>
                {/* get username here */}
                {/* <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Doing something...</Text>
      </AnimatedLoader> */}
                <Text style={{fontSize: 22, color: 'teal', paddingHorizontal: 15}}>Connecting to the driver</Text>
                <View style={{height: 10}}></View> 
            </View>
            
            
            
        </View>
     );
}
 
export default DriverLoad;