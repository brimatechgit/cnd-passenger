import { Appbar } from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground, Image } from 'react-native';
// import IMAGENAME from './assets/image'
// import Image from './src/assets/images/'

function CustomNavigationBar() {
  return (
    <Appbar.Header style={{backgroundColor: 'teal'}}>
      {/* <ImageBackground
        source={IMAGENAME}
      ></ImageBackground> */}


<Pressable style={{paddingLeft:10}} onPress={()=>props.navigation.pop()}><Icon name='arrow-back' color='white' size={35}/></Pressable>

<Image 
style={{flex: 1, }}
  resizeMode = 'contain'
source={require('./src/assets/images/userLogo.png')} />
      {/* <Appbar.Content title="Click n Deliver" style={{alignItems: 'center', justifyContent: 'center', }}/> */}
    </Appbar.Header>
  );
}

export default CustomNavigationBar;