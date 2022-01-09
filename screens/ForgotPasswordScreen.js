import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'
import { auth } from '../config/firebase'
import { sendPasswordResetEmail } from "firebase/auth";


const LoginEnterCodeScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')

    const handleConfirmEmail = () => {
    
        sendPasswordResetEmail(auth, email)
          .then(function (user) {
            alert('Please check your email...')
          }).catch(function (e) {
            console.log(e)
          })
      
    }

    const handleBackToLogin = () => {
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
        <Text style={styles.textStyle}>Enter your E-Mail: </Text>
        <View style={styles.buttonContainer}>
        <CustomTextInput text={"E-Mail"} setText={setEmail}>
        </CustomTextInput>
        <PurpleButton text={"CONFIRM"} onPress={handleConfirmEmail}>
        </PurpleButton>
        <PurpleButton text={"BACK TO LOGIN PAGE"} onPress={handleBackToLogin}>
        </PurpleButton>
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
