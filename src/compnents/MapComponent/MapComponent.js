import React, {useState, useEffect} from 'react';
import styles from './styles';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountPage from '../../screens/AccountPage/AccountPage';
import PulseCircleLayer from '../PulseCircleLayer';
import CenteringButtonMap from '../CenteringButtonMap'

import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("sk.eyJ1IjoidHNoZXBhbmdicmltYSIsImEiOiJja3VsZ3FkMjcxM2s0MndvNmRubzZvcmR0In0.KKEC8difxqkQxrK1REMvZQ");


// Coordinates
const UserLocation = [28.225375324978117, -26.16299249170051]; // [longitude, latitude]
const DestinationLocation = [28.429375324978117, -26.29299249170051,]; // [longitude, latitude]
const StartLocation = UserLocation;
const CenterCoordinate = UserLocation;

const MapComponent = props => {

  let [userLocation, setUserLocation] = useState(UserLocation);
  let [route, setRoute] = useState(null);
  let [started, setStarted] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoute = async () => {
      const reqOptions = {
        waypoints: [
          {coordinates: StartLocation},
          {coordinates: DestinationLocation},
        ],
        profile: 'walking',
        geometries: 'geojson',
      };
      const res = await directionsClient.getDirections(reqOptions).send();
      const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
      setRoute(newRoute);
    };
    started && fetchRoute();
  }, [started]);

  // Action to center the map on user position
  const centeringButtonPress = () => {
    _camera.flyTo(userLocation, 1500);
    _camera.zoomTo(14);
  };

  // Update userposition on update location
  const onUserLocationUpdate = newUserLocation => {
    setUserLocation([
      newUserLocation.coords.longitude,
      newUserLocation.coords.latitude,
    ]);
  };

  const onStop = () => {
    setRoute(null);
    setStarted(false);
  };

  const renderDestinationPoint = () => {
    return DestinationLocation && DestinationLocation.length > 0 && started ? (
      <MapboxGL.PointAnnotation
        id="destination"
        title="destination location"
        coordinate={DestinationLocation}>
        <View style={styles.circle}>
          <View style={styles.innerCircle}>
            <View style={styles.dotCircle} />
          </View>
        </View>
      </MapboxGL.PointAnnotation>
    ) : null;
  };

  const renderStart = () => {
    return StartLocation.length > 0 && started ? (
      <MapboxGL.PointAnnotation
        id="start"
        title="start location"
        coordinate={StartLocation}>
        <View style={styles.circle}>
          <View style={styles.innerCircle}>
            <View style={styles.dotCircle} />
          </View>
        </View>
      </MapboxGL.PointAnnotation>
    ) : null;
  };

  const renderRoute = () => {
    return route ? (
      <MapboxGL.ShapeSource id="routeSource" shape={route}>
        <MapboxGL.LineLayer id="routeFill" style={layerStyles.route} />
      </MapboxGL.ShapeSource>
    ) : null;
  };

  // Start Button
  const renderActions = () => (
    <TouchableOpacity
      style={styles.startRouteButton}
      onPress={() => !started ? setStarted(true) : onStop()}>
      <Text style={styles.text}>
        {!started ? 'Start' : 'Stop'}
      </Text>
    </TouchableOpacity>
  );

    return ( 
        <View style={styles.container}>
            
            {/* <MapView style={styles.map} 
            
            style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{ 
        latitude: -26.16299249170051,
        longitude: 28.225375324978117,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
            >

        <Marker
          coordinate={{
            latitude: -26.16299249170051,
            longitude: 28.225375324978117,}}
        ></Marker>

        
        
            </MapView> */}

              <MapboxGL.MapView style={styles.map} 

                showUserLocation={true}
                logoEnabled={false}
            compassEnabled={false}
            zoomEnabled={true}
              
                // initialCenterCoordinate={[40.444328, -79.953155]}
              >
                <MapboxGL.Camera
                    zoomLevel={14}
                    animationMode="flyTo"
                    animationDuration={0}
                    centerCoordinate={CenterCoordinate}
                    followUserLocation={false}
                    defaultSettings={{
                      centerCoordinate: CenterCoordinate,
                      followUserLocation: false,
                      followUserMode: 'normal',
                    }}
                    />

<MapboxGL.UserLocation
              visible={true}
              onUpdate={newUserLocation =>
                onUserLocationUpdate(newUserLocation)
              }
            />
            {renderRoute()}
            {renderDestinationPoint()}
            {renderStart()}
              </MapboxGL.MapView>
              {renderActions()}
          <CenteringButtonMap onPress={() => centeringButtonPress()} />
            <TouchableOpacity style={styles.overlay} onPress={() => props.navigation.navigate(AccountPage)}>
              <Icon name='menu' size={35} color='white'></Icon>
            </TouchableOpacity>

        </View>
     );
}
 
export default MapComponent;