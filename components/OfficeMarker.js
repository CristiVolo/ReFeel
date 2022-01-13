import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import OfficePageScreen from '../screens/OfficePageScreen';

const OfficeMarker = (props) => {

    // const [ pin, setPin ] = React.useState({
    //     latitude: props.mLocation["lat"],
    //     longitude: props.mLocation["lng"]
    // })
    const navigation = useNavigation()
    return (
        // <TextInput
        //   placeholder={props.text}
        //   style={[styles.input, styles.inputOutline]}
        //   value={props.value}
        //   onChangeText={text => props.setText(text)}
        //   onChange={(e) => {
        //     console.log(e.nativeEvent.text)
        //   }}
        // />
        
        <Marker
            coordinate={props.mLocation}
            pinColor={'orange'}
            draggable={false}
            onPress={ () =>
                navigation.navigate(
                    'OfficePage', 
                    {
                        vicinity: props.vicinity,
                        shortDescription: props.shortDescription
                    }
                )
            }
        >
            <Callout>
                <Text>
                    {props.mText}
                </Text>
            </Callout>
        </Marker>
    )
}

export default OfficeMarker
