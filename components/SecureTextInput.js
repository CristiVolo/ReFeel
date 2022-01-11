import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

const SecureTextInput = (props) => {
    return (
        <TextInput
          placeholder={props.text}
          style={[styles.input, styles.inputOutline]}
          value={props.value}
          onChangeText={text => props.setText(text)}
          onChange={(e) => {
            console.log(e.nativeEvent.text)
          }}
          secureTextEntry
        />
    )
}

export default SecureTextInput

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
        marginBottom: 20,
      },
})
