import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";


const SpecialistDataScreen = ({ navigation: { navigate }, route }) => {
  

    const email = route.params.email;
    const password = route.params.password;
    const handleRegistration = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('Login');
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    const setText = () => {}

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
        <Text style={styles.textStyle}>Enter your office address : </Text>
        <View style={styles.buttonContainer}>
        <CustomTextInput text={"Street"} setText={setText}>
        </CustomTextInput>
        <CustomTextInput text={"Number"} setText={setText}>
        </CustomTextInput>
        <CustomTextInput text={"City"} setText={setText}>
        </CustomTextInput>
        <PurpleButton text={"COMPLETE REGISTRATION"} onPress={handleRegistration}>
        </PurpleButton>
       </View>
    </KeyboardAvoidingView>
    )
}

export default SpecialistDataScreen

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
