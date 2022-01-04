import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const PurpleButton = (props) => {
    return (
        <TouchableOpacity style={styles.purpleButton} onPress={props.onPress}>
            <Text style={styles.itemText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default PurpleButton

const styles = StyleSheet.create({
purpleButton:{
    backgroundColor: '#4644B1',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
},
itemText:{
    color: '#FFE600',
    fontWeight: '700',
    fontSize: 16,
}
})
