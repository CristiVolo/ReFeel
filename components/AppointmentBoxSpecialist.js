import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from './PurpleButton'

const AppointmentBoxSpecialist = (props) => {
    return (
        <View
          style={[styles.input, styles.inputOutline]}

        >
            <Text>{props.name}</Text>
            <Text>{props.date}</Text>
            <Text>{props.time}</Text>
            <Text>{props.description}</Text>
            <View style={styles.buttonStyle}>
                <PurpleButton text={'CLEAR'} onPress={props.clear}></PurpleButton>
            </View>
        </View>
        
    )
}

export default AppointmentBoxSpecialist

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#4644B1',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      inputOutline: {
        backgroundColor: '#E5E5E5',
        marginTop: 5,
        borderColor: '#4644B1',
        borderWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20
      },
      buttonStyle: {
        width: '100%',
      }
})
