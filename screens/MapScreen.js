import React from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { Platform, StyleSheet, Text, SafeAreaView, Dimensions, View } from 'react-native';
import { render } from 'react-dom';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import { extractQuerystring } from '@firebase/util';
import PurpleButton from '../components/PurpleButton'
import { auth, firestore, fsdb } from '../config/firebase'
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'
import { collection, query, where, getDocs, addDoc, setDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import OfficeMarker from '../components/OfficeMarker';

const MapScreen = () => {

    const navigation = useNavigation()
    const defaultFunction = () =>{

    }

    const handleSeeAppointments = async () => {
        const userRef = doc(fsdb, 'users', auth.currentUser.uid);
        const q = query(collection(fsdb, "appointments"), where("defaultUser", "==", userRef), where("status", "==", true))
        const querySnapshot = await getDocs(q);
        navigation.navigate('AppointmentListForUser', {querySnapshot: querySnapshot});
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
        navigation.replace("Login");
        }).catch((error) => {
        // An error happened.
        });
      }

    const [ pin, setPin ] = React.useState({
        latitude: 45.7379433,
        longitude: 21.2189823
    })

    const [ region, setRegion ] = React.useState({
        latitude: 45.7379433,
        longitude: 21.2189823
    })
    
    const nearbySearchTemplate = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

    const placeDetailsTemplate = 'https://maps.googleapis.com/maps/api/place/details/json?'

    const [ radius, setRadius ] = React.useState('10000')

    const API_KEY = "AIzaSyAqun3jSd8xtOHVfJVeTLfmofqeTxmhmFk"

    const [ type, setType ] = React.useState('health')

    const [keyword, setkeyword] = React.useState('psihologie')

    const [visible, setVisible] = React.useState(false)
    const [prompt, setPrompt] = React.useState(false);

    const [ markLocation, setMarkLocation ] = React.useState({
        latitude: 45.7379433,
        longitude: 21.2189823
    })
    const [ markText, setMarkText ] = React.useState('')
    const [ markVicinity, setMarkVicinity ] = React.useState('')

    // var nearbySearchconfig = {
    //   method: 'get',
    //   url: nearbySearchTemplate + 'location=' + region.latitude + '%2C' + region.longitude + '&radius=' + radius + '&type=' + type + '&keyword=' + keyword + '&key=' + API_KEY,
    //   headers: {}
    // };

    // function renderOfficeMarker(vicinity, shortDescription, location) {
    //         console.log('inside render office marker')
    //         return(
    //             <OfficeMarker
    //                 mLocation = {location}
    //                 mText = {shortDescription}
    //                 mVicinity = {vicinity}
    //             >
    //             </OfficeMarker>
    //         );

    //   }

    // const handleNearbySearch = async () => {
    //     axios(nearbySearchconfig)
    //     .then(function (response) {

    //         //console.log(JSON.parse(JSON.stringify(response.data)));
    //         let nearbySearchData = response.data;

    //         // Iterate through the JSON file to get what we need
    //         for(const i in nearbySearchData["results"]) {

    //             let singleResult = nearbySearchData["results"][i];
    //             let name = singleResult["name"]
    //             let location = JSON.stringify(singleResult["geometry"]["location"])
    //             let placeId = singleResult["place_id"];
    //             let vicinity = singleResult["vicinity"];
                
    //             var placeDetailsconfig = {
    //                 method: 'get',
    //                 url: placeDetailsTemplate + 'place_id=' + placeId + '&fields=' + 'formatted_phone_number' + '&key=' + API_KEY,
    //                 headers: {}
    //               };

    //             // Use place details to request phone number, such as phone numbers, for examples
    //             axios(placeDetailsconfig)
    //             .then(function (placeDetailsResponse) {
                    
    //                 let placeDetailData = placeDetailsResponse.data;
    //                 let formattedPhoneNumber = placeDetailData['result']['formatted_phone_number'];

    //                 console.log(formattedPhoneNumber);
    //                 console.log('-------------------');

    //                 // Markers that facilitate navigation to each OfficePage
    //                 setDoc(doc(fsdb, "specialistDataSets", i), {
    //                     officeVicinity: vicinity,
    //                     shortDescription: name,
    //                     officeLocation: location
    //                 })

    //                 renderOfficeMarker(i);
    //             })
    //             .catch(function (placeDetailsError) {
    //                 console.log(placeDetailsError);
    //             });
    //             // // display only if vicinity matches
                
    //             //     console.log(nearbySearchData["results"][i]);
    //             //     console.log('-------------------');
    //             //     // console.log(nearbySearchData["results"][i]["name"]);
    //             //     // console.log(nearbySearchData["results"][i]["geometry"]["location"]);
    //             //     // console.log(nearbySearchData["results"][i]["vicinity"]);
    //             //     console.log('-------------------\n');
                
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    //}

    return (
        <SafeAreaView style={styles.temporary}>
            <View style={styles.buttons}>
            <PurpleButton text={"SIGN OUT"} onPress={handleSignOut}></PurpleButton>
            <PurpleButton text={"APPOINTMENTS"} onPress={handleSeeAppointments}></PurpleButton>
            </View>
            <SafeAreaView style={{height: 50}}>
                <GooglePlacesAutocomplete
                    placeholder="🔍 Search for a specialists' office"
                    fetchDetails={true}
                    currentLocation={true}
                    disableScroll={false}
                    GooglePlacesSearchQuery={{
                        rankby: "distance"
                    }}
                    onPress={(data, details) => {
                        // 'details' is provided when fetchDetails = true
                        //console.log(data, "\n------------\n", details);
                        //handleNearbySearch();
                        let resultData = data;
                        let resultDetails = details;
                  
                        let shortDescription = resultData["description"]
                        let location = JSON.stringify(resultDetails["geometry"]["location"])
                        let formattedPhoneNumber = resultDetails['formatted_phone_number']
                        let vicinity = resultDetails["vicinity"];
                        let name = resultDetails["name"]
        
                        // Markers that facilitate navigation to each OfficePage
                        setDoc(doc(fsdb, "specialistDataSets", name), {
                            officeVicinity: vicinity,
                            shortDescription: shortDescription,
                            officeLocation: location
                        })
                        let parsedLocation = JSON.parse(location)
                        setMarkLocation({
                            latitude: parsedLocation["lat"],
                            longitude: parsedLocation["lng"]
                        })
                        setMarkText(shortDescription)
                        setMarkVicinity(vicinity)
                        
                        setPrompt(true);
                        
                        // Use place details to request phone number, such as phone numbers, for examples
                        // // display only if vicinity matches
                        
                        //     console.log(nearbySearchData["results"][i]);
                        //     console.log('-------------------');
                        //     // console.log(nearbySearchData["results"][i]["name"]);
                        //     // console.log(nearbySearchData["results"][i]["geometry"]["location"]);
                        //     // console.log(nearbySearchData["results"][i]["vicinity"]);
                        //     console.log('-------------------\n');
                            
                    }}
                    query={{
                        key: API_KEY,
                        language: 'en',
                        radius: 30000,
                        location: `${region.latitude}, ${region.longitude}`
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
                {/* <Marker
                    coordinate={pin}
                    pinColor={'red'}
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
                </Marker> */}
                {/* <Circle
                    center={pin}
                    radius={1000}
                 /> */}
                 <View>
                     {
                         prompt &&
                        <OfficeMarker
                            mLocation = {markLocation}
                             mText = {markText}
                            mVicinity = {markVicinity}
                        >
                        </OfficeMarker>
                    }
                 </View>
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
  },

  buttons :{
      width: 100,
      flexDirection: 'row',
      marginLeft: 70,
  }
})