import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout, Circle } from 'react-native-maps';

const OfficeMarker = (props) => {

    const [ pin, setPin ] = React.useState({
        latitude: props.mLocation["latitude"],
        longitude: props.mLocation["longitude"]
    })

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
            coordinate={pin}
            pinColor={'orange'}
            draggable={false}
        >
            <Callout>
                <Text>
                    {props.mPhone}
                </Text>
            </Callout>
        </Marker>
    )
}

export default OfficeMarker
