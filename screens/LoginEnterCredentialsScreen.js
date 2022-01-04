import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'


const LoginEnterCredentialsScreen = () => {
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
        <Text style={styles.textStyle}>Enter User Credentials</Text>
        <View style={styles.buttonContainer}>
        <CustomTextInput text={"USERNAME/E-MAIL ADDRESS"}>
        </CustomTextInput>
        <SecureTextInput text={"PASSWORD"}>
        </SecureTextInput>
        <PurpleButton text={"AUTHENTICATE"} onPress={handleLogInByEnteringCredentials}>
        </PurpleButton>
        
       </View>
      <View style={styles.button}>
        <TransparentButton text={"FORGOT PASSWORD?"}>
        </TransparentButton>
      </View>
    </KeyboardAvoidingView>
    )
}

export default LoginEnterCredentialsScreen

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
