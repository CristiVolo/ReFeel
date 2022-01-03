import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import LargeButton from '../components/LargeButton'

const LoginScreen = () => {
    const navigation = useNavigation()
    const handleLogInByEnteringCredentials = () => {
      navigation.replace("Home");
    }
    return (
        <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        <Text style={styles.textStyle}>How would you like to log in ?</Text>
        <View style={styles.buttonContainer}>
        <LargeButton text={"ENTER CREDENTIALS"} onPress={handleLogInByEnteringCredentials}>
        </LargeButton>
        <LargeButton text={"SEND CODE: E-MAIL"}>
        </LargeButton>
        <LargeButton text={"SEND CODE: SMS"}>
        </LargeButton>
        
      </View>
      
    </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      textStyle:{
        color: '#50048B'
      },
      button:{
        
      }
})
