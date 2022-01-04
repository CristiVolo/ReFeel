import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'


const LoginEnterCodeScreen = () => {
    const navigation = useNavigation()
    const handleLogInByEnteringCredentials = () => {
      navigation.replace("Login");
    }
    return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={
        Platform.select({
           android: () => -300
        })()
      }
    >
        <Text style={styles.textStyle}>Enter the received code</Text>
        <View style={styles.buttonContainer}>
        <SecureTextInput text={"CODE"}>
        </SecureTextInput>
        <PurpleButton text={"AUTHENTICATE"} onPress={handleLogInByEnteringCredentials}>
        </PurpleButton>
        <PurpleButton text={"RESEND CODE"} onPress={handleLogInByEnteringCredentials}>
        </PurpleButton>
        <PurpleButton text={"CHANGE PROCEDURE"} onPress={handleLogInByEnteringCredentials}>
        </PurpleButton>
        <Text style={styles.textStyle}>*You can either re-enter your data
        and resend the code, or change 
        the authentication procedure.
        </Text>
       </View>
    </KeyboardAvoidingView>
    )
}

export default LoginEnterCodeScreen

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
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      }
})
