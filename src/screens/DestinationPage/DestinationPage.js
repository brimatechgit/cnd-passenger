import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, Text, Pressable, TouchableOpacity} from 'react-native';
import  {GooglePlacesAutocomplete}  from 'react-native-google-places-autocomplete';
import  {useNavigation}  from '@react-navigation/native';

import styles from './styles.js';
import PlaceRow from "./PlaceRow";
import PickUpLocationDetails from './PickUpDetails/PickUpDetails.js';

const homePlace =  {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    // if (originPlace && destinationPlace) {
      
      
      // navigation.navigate('PickUpLocationDetails', {
      //   originPlace,
      //   destinationPlace,
      // })
    // }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
<View style={{alignItems: 'center', top: '60%'}}>
<TouchableOpacity onPress={() => navigation.navigate(PickUpLocationDetails)} style={styles.button}>
                        
                        <Text style={{color: 'teal', fontSize: 15}}>Continue</Text>
                    
                </TouchableOpacity>

          </View>
      <View style={{padding: 10}}>
        <Text style={{color: 'teal', fontSize: 22, fontWeight: '600'}}>Select Destination</Text>

      </View>
        
      
      <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCXmwaGSpfTHbYJjXmlbnQak3cAdRInBQc',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCXmwaGSpfTHbYJjXmlbnQak3cAdRInBQc',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.buttonBig} onPress={() => props.navigation.navigate(PickUpLocationDetails)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;