import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const LargeButton = (props) => {
    return (
        <TouchableOpacity style={styles.purpleButton} onPress={props.onPress}>
            <Text style={styles.itemText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default LargeButton

const styles = StyleSheet.create({
purpleButton:{
    backgroundColor: '#E5E5E5',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
},
itemText:{
    color: '#4644B1',
    fontWeight: '700',
    fontSize: 16,
}
})
