import React, {Component} from 'react';
// import styles from './styles';
import { View, Text, Pressable, TouchableOpacity, StyleSheet,Dimensions, Image, SafeAreaView } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountPage from '../../screens/AccountPage/AccountPage';

// import * as Permissions from 'expo-permissions';
// import * as Location from 'expo-location';


// const MapComponent = props => {



//     return ( 
//         <View style={styles.container}>
            
//             <MapView style={styles.map} 
            
//             style={{width: '100%', height: '100%'}}
//       provider={PROVIDER_GOOGLE}
//       showsUserLocation={true}
//       initialRegion={{ 
//         latitude: -26.16299249170051,
//         longitude: 28.225375324978117,
//         latitudeDelta: 0.0222,
//         longitudeDelta: 0.0121,
//       }}
//             >

//         <Marker
//           coordinate={{
//             latitude: -26.16299249170051,
//             longitude: 28.225375324978117,}}
//         ></Marker>

        
        
//             </MapView>
//             <TouchableOpacity style={styles.overlay} onPress={() => props.navigation.navigate(AccountPage)}>
//               <Icon name='menu' size={35} color='white'></Icon>
//             </TouchableOpacity>

//         </View>
//      );
// }
 
// export default MapComponent;

const { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;
// const LATITUDE = -26.16299249170051;
// const LONGITUDE = 28.225375324978117;
// const LATITUDE_DELTA = 0.0222;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// import marker from '../../../assets/images/1.png'

const latitudeDelta = 0.025
const longitudeDelta = 0.025

export class MapComponent extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     region: {
  //       latitude: LATITUDE,
  //       longitude: LONGITUDE,
  //       latitudeDelta: LATITUDE_DELTA,
  //       longitudeDelta: LONGITUDE_DELTA,
  //     },
  //   };
  // }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  // jumpRandom() {
  //   this.setState({ region: this.randomRegion() });
  // }

  // animateRandom() {
  //   this.map.animateToRegion(this.randomRegion());
  // }

  // animateRandomCoordinate() {
  //   this.map.animateToCoordinate(this.randomCoordinate());
  // }

  // animateToRandomBearing() {
  //   this.map.animateToBearing(this.getRandomFloat(-360, 360));
  // }

  // animateToRandomViewingAngle() {
  //   this.map.animateToViewingAngle(this.getRandomFloat(0, 90));
  // }

  // getRandomFloat(min, max) {
  //   return (Math.random() * (max - min)) + min;
  // }

  // randomCoordinate() {
  //   const region = this.state.region;
  //   return {
  //     latitude: region.latitude + ((Math.random() - 0.5) * (region.latitudeDelta / 2)),
  //     longitude: region.longitude + ((Math.random() - 0.5) * (region.longitudeDelta / 2)),
  //   };
  // }

  // randomRegion() {
  //   return {
  //     ...this.state.region,
  //     ...this.randomCoordinate(),
  //   };
  // }


  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <MapView
  //         provider={this.props.provider}
  //         ref={ref => { this.map = ref; }}
  //         mapType={MAP_TYPES.TERRAIN}
  //         style={styles.map}
  //         initialRegion={this.state.region}
  //         onRegionChange={region => this.onRegionChange(region)}
  //       />
  //       <View style={[styles.bubble, styles.latlng]}>
  //         <Text style={{ textAlign: 'center' }}>
  //           {this.state.region.latitude.toPrecision(7)},
  //           {this.state.region.longitude.toPrecision(7)}
  //         </Text>
  //       </View>
  //       <View style={styles.buttonContainer}>
  //         <TouchableOpacity
  //           onPress={() => this.jumpRandom()}
  //           style={[styles.bubble, styles.button]}
  //         >
  //           <Text style={styles.buttonText}>Jump</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           onPress={() => this.animateRandom()}
  //           style={[styles.bubble, styles.button]}
  //         >
  //           <Text style={styles.buttonText}>Animate (Region)</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           onPress={() => this.animateRandomCoordinate()}
  //           style={[styles.bubble, styles.button]}
  //         >
  //           <Text style={styles.buttonText}>Animate (Coordinate)</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           onPress={() => this.animateToRandomBearing()}
  //           style={[styles.bubble, styles.button]}
  //         >
  //           <Text style={styles.buttonText}>Animate (Bearing)</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           onPress={() => this.animateToRandomViewingAngle()}
  //           style={[styles.bubble, styles.button]}
  //         >
  //           <Text style={styles.buttonText}>Animate (View Angle)</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   )
  // }

  // const LATITUDE = -26.16299249170051;
// const LONGITUDE = 28.225375324978117;

  state = {
    // location: {},
    // errorMessage: '',


    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: -26.16299249170051,
      longitude: 28.225375324978117
    }
  }

  // componentDidCatch(){
  //   this._getLocation();
  // }

  // _getLocation = async () => {
  //   const {status } = await Permissions.askAsnc(Permissions.LOCATION);

  //   if(status !== 'granted') {
  //     console.log('Permission Not Gran');

  //     this.setState({
  //       errorMessage:'permission not granted'
  //     })
  //   }

  //   const location = await Location.getCurrentPositionAsync();

  //   this.setState({
  //     location
  //   })
  // }

  onRegionChange = region => {
    this.setState({
      region
    })
  }

  render() {
    const { region } = this.state

    return (
      <View style={styles.map}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={this.onRegionChange}
        />
        <View style={styles.markerFixed}>
        <Image 
style={styles.marker}
resizeMode = 'contain'
source={require('../../../src/assets/images/pin.png')} />
        </View>
        <SafeAreaView style={styles.footer}>
          <Text style={styles.region}>{JSON.stringify(region, null, 2)}</Text>
        </SafeAreaView>
      </View>
    )
  }
}

// DisplayLatLng.propTypes = {
//   provider: ProviderPropType,
// };

const styles = StyleSheet.create({
  map: {
    width:'100%',
    height:'100%'
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 70,
    width: 70
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  }
})


export default MapComponent;
