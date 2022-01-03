import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleLogInByEnteringCredentials = () => {
      navigation.replace("Login");
    }
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={handleLogInByEnteringCredentials}>
            <Text>ceva</Text>
          </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
})
