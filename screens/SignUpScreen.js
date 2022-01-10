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
import { collection, addDoc } from "firebase/firestore"; 



const SignUpScreen = ({ navigation: { navigate } }) => {


  // Use state for E-Mail, Password (used in with "auth"; "email" is also used with firestore) 
  // and the rest of the data (without profilePic, that will be added in the profile page)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  // const [profilePic, setProfilePic] = useState('')
  const [secretQuestion, setSecretQuestion] = useState('')
  const [sqAnswer, setSqAnswer] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [role, setRole] = useState('')


  // Role blank string
  // let role='';


  // Registration
  const handleRegistration = () => {
    
    // If the specialist role is selected, we add more data, and go to the SpecialistData screen
    if(role == 'Specialist')
      navigate("SpecialistData", {email: email, password: password});
    else
    {
        // Otherwise, we proceed with the creation of a classic user
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


  // Role selection
  // const handleSelect=(e)=> { role=e; }


  // Return value of the screen
  return (

    // Allows us to scroll down the screen? TBA: reduce size to minimum needed
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

            {/* FIRST NAME, LAST NAME */}
            <Text style={styles.textStyle}>Enter Your first and last names: </Text>

            <CustomTextInput text={"e.g: John"} value={firstName} setText={setFirstName}>
            </CustomTextInput>

            <CustomTextInput text={"e.g: Doe"} value={lastName} setText={setLastName}>
            </CustomTextInput>
            {/* ------------------ */}

            {/* USERNAME, E-MAIL ADDRESS */}
            <Text style={styles.textStyle}>Enter your username and E-Mail address: </Text>

            <CustomTextInput text={"e.g: JohnD1@!67"} value={username} setText={setUsername}>
            </CustomTextInput>

            <CustomTextInput text={"e.g: xavarin@gmail.com"} value={email} setText={setEmail}>
            </CustomTextInput>
            {/* ------------------ */}

            {/* PHONE NUMBER */}
            <Text style={styles.textStyle}>Enter your phone number: </Text>

            <CustomTextInput text={"Phone Number"} value={phoneNumber} setText={setPhoneNumber}>
            </CustomTextInput>
            {/* ------------------ */}

            {/* SECRET QUESTION AND ANSWER */}
            <Text style={styles.textStyle}>Enter your secret question and an answer: </Text>

            <ModalDropdown
              defaultValue='Select'
              options={[
                'What was your first pet?', 
                'What was the model of your first car?', 
                'In what city were you born?', 
                "What was your father's middle name?",
                'What was your childhood nickname?'
              ]}
              style={[styles.dropdownStyle, styles.dropdownStyle2]}
              onSelect={(idx, value) => { // VALUE DOES NOT "CHANGE" UNTIL NEXT TAP; still, it correctly changes
                // console.log(secretQuestion)
                setSecretQuestion(value)
                // console.log(secretQuestion)
              }}
              onDropdownWillShow={() => {
                console.log(secretQuestion)
              }}
            />

            <SecureTextInput text={"Answer"} value={sqAnswer} setText={setSqAnswer}>
            </SecureTextInput>
            {/* ------------------ */}

            {/* PASSWORD AND PASSWORD CONFIRMATION */}
            <Text style={styles.textStyle}>Enter your password: </Text>

            <SecureTextInput text={"Password"} value={password} setText={setPassword}>
            </SecureTextInput>

            <Text style={styles.textStyle}>Confirm your password: </Text>

            <SecureTextInput text={"Confirm Password"} value={confirmPwd} setText={setConfirmPwd}>
            </SecureTextInput>
            {/* ------------------ */} 

            {/* ROLE */}
            <Text style={styles.textStyle}>Select your role: </Text>
            <ModalDropdown
              defaultValue='Select'
              options={[
                'Default user',
                'Specialist'
              ]}
              style={[styles.dropdownStyle, styles.dropdownStyle2]}
              onSelect={(idx, value) => {
                setRole(value)
              }}
              onDropdownWillShow={() => {
                console.log(role)
              }}
            />
            {/* ------------------ */}

            {/* REGISTER BUTTON (OR GO TO SPECIALIST DETAIL PAGE) */}
            <PurpleButton text={"REGISTER"} onPress={handleRegistration}>
            </PurpleButton>
            {/* ------------------ */}

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
