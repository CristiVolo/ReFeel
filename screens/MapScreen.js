import React from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { Platform, StyleSheet, Text, SafeAreaView, Dimensions } from 'react-native';
import { render } from 'react-dom';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapScreen = () => {

    const [ pin, setPin ] = React.useState({
        latitude: 45.7379433,
        longitude: 21.2189823
    })

    return (
        <SafeAreaView style={styles.temporary}>
            <SafeAreaView style={{height: 50}}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    fetchDetails={true}
                    GooglePlacesSearchQuery={{
                        rankby: "distance"
                    }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: `AIzaSyAqun3jSd8xtOHVfJVeTLfmofqeTxmhmFk`,
                        language: 'en'
                    }}
                    styles={{
                        container: {
                            flex: 0,
                            position: "absolute",
                            width: "100%",
                            zIndex: 1
                        },
                        listView: {
                            backgroundColor: "white"
                        }
                    }}
                />
            </SafeAreaView>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 45.7379433,
                    longitude: 21.2189823,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker
                    coordinate={pin}
                    pinColor={'orange'}
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("Drag start", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                    <Callout>
                        <Text>
                            Orange Marker
                        </Text>
                    </Callout>
                </Marker>
                <Circle
                    center={pin}
                    radius={1000}
                 />
            </MapView>
        </SafeAreaView>
    );
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temporary: {
    flex: 1,
    marginTop: 50
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})