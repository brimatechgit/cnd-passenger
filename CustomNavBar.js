import { Appbar } from 'react-native-paper';
import React from 'react';
import { ImageBackground, Image } from 'react-native';
// import IMAGENAME from './assets/image'
// import Image from './src/assets/images/'

function CustomNavigationBar() {
  return (
    <Appbar.Header style={{backgroundColor: 'teal'}}>
      {/* <ImageBackground
        source={IMAGENAME}
      ></ImageBackground> */}

<Image 
style={{flex: 1, }}
  resizeMode = 'contain'
source={require('./src/assets/images/userLogo.png')} />
      {/* <Appbar.Content title="Click n Deliver" style={{alignItems: 'center', justifyContent: 'center', }}/> */}
    </Appbar.Header>
  );
}

export default CustomNavigationBar;