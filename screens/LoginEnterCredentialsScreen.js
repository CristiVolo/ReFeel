import { useNavigation } from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity, BackHandler } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'
import { auth, fsdb } from '../config/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore"; 



const LoginEnterCredentialsScreen = () => {


    // Navigation
    const navigation = useNavigation()


    // Set states for email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // Use of useEffect hook on logout
    useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('In authstatechanged');
          async function nextScreen() {
            const docRef = doc(fsdb, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.data().specialistData != null)
              {
                navigation.replace("SpecialistMenu");
              }
            else
              {
                navigation.replace("Map");
              }
          }
          nextScreen()
        
          } 
      })
  
      return unsubscribe;

    }, [])
    

    // Login
    const handleLogInByEnteringCredentials = () => {

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Retrieve the specialized data set from its collecdtion; if mull, we deal with a default user, who is sent to
        console.log('In authstatechanged');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    }


    // Go to the "Forgot Password" screen
    const handleForgotPassword = () => {
      navigation.replace("ForgotPassword");
    }

    const handleBack = () => {
      navigation.replace("Login");
    }


    // Return value of the screen
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

          {/* E-Mail and Password are required for login */}
          <Text style={styles.textStyle}>Enter User Credentials</Text>
          <View style={styles.buttonContainer}>

            <CustomTextInput text={"E-MAIL ADDRESS"} setText={setEmail}>
            </CustomTextInput>
            <SecureTextInput text={"PASSWORD"} setText={setPassword}>
            </SecureTextInput>
            <PurpleButton text={"AUTHENTICATE"} onPress={handleLogInByEnteringCredentials}>
            </PurpleButton>
            <PurpleButton text={"BACK"} onPress={handleBack}>
            </PurpleButton>
            
          </View>

          {/* Go to "ForgotPassword" screen */}
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
