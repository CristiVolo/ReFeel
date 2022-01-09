import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import React, { useEffect, useState } from 'react'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'
import ModalDropdown from 'react-native-modal-dropdown';
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUpScreen = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    let role='';

    const handleRegistration = () => {
      if(role == '1')
        navigate("SpecialistData", {email: email, password: password});
      else
      {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      }
    }

    const handleSelect=(e)=> {
      role=e;
    }
    return (
    <ScrollView >
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={
        Platform.select({
           android: () => -300
        })()
      }
    >
        <View style={styles.buttonContainer}>
  
        <Text style={styles.textStyle}>Enter Your fisrt and last names : </Text>
        <CustomTextInput text={"e.g: John"}>
        </CustomTextInput>

        <CustomTextInput text={"e.g: Doe"}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter your username and E-Mail address : </Text>
        <CustomTextInput text={"e.g: JohnD1@!67"}>
        </CustomTextInput>

        <CustomTextInput text={"e.g: xavarin@gmail.com"} email={email} setText={setEmail}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter your phone number : </Text>
        <CustomTextInput text={"Phone Number"}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter your secret question and an answer : </Text>

        <ModalDropdown
          defaultValue='Select'
          options={['What was your first pet?', 'What was the model of your first car?', 'In what city were you born?', "What was your father's middle name?", 'What was your childhood nickname?']}
          style={[styles.dropdownStyle, styles.dropdownStyle2]}
        />

        <SecureTextInput text={"Answer"}>
        </SecureTextInput>

        <Text style={styles.textStyle}>Enter your password : </Text>
        <SecureTextInput text={"Password"} password={password} setPassword={setPassword}>
        </SecureTextInput>

        <Text style={styles.textStyle}>Select your role : </Text>
        <ModalDropdown
          defaultValue='Select'
          options={['Default user', 'Psychotherapist']}
          style={[styles.dropdownStyle, styles.dropdownStyle2]}
          onSelect={handleSelect}
        />

        <PurpleButton text={"REGISTER"} onPress={handleRegistration}>
        </PurpleButton>
       </View>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default SignUpScreen

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
        color: '#50048B',
        marginTop: 40
      },
      button:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      dropdownStyle: {
        backgroundColor: '#4644B1',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      dropdownStyle2: {
        backgroundColor: '#E5E5E5',
        marginTop: 5,
        borderColor: '#4644B1',
        borderWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20
      },
})
