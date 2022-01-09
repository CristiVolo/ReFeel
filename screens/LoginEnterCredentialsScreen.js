import { useNavigation } from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'
import { auth } from '../config/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const LoginEnterCredentialsScreen = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.replace("home");
        } 
      })
  
      return unsubscribe
    }, [])

    const handleLogInByEnteringCredentials = () => {

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    }

    const handleForgotPassword = () => {
      navigation.replace("ForgotPassword");
    }

    const defaultFunction=()=> {
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
        <CustomTextInput text={"E-MAIL ADDRESS"} setText={setEmail}>
        </CustomTextInput>
        <SecureTextInput text={"PASSWORD"} setPassword={setPassword}>
        </SecureTextInput>
        <PurpleButton text={"AUTHENTICATE"} onPress={handleLogInByEnteringCredentials}>
        </PurpleButton>
        
       </View>
      <View style={styles.button}>
        <TransparentButton text={"FORGOT PASSWORD?"} onPress={handleForgotPassword}>
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
