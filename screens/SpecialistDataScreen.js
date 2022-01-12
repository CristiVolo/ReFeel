import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'
import { auth, fsdb } from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc, GeoPoint, updateDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';



const SpecialistDataScreen = () => {
  
  const navigation = useNavigation()

  // Use state for specialist data (TBA about geolocation), from the sign in, only the city, number and stret are initialized
  const [officeCity, setOfficeCity] = useState('')
  const [officeLocation, setOfficeLocation] = useState(null)
  const [officeNumber, setOfficeNumber] = useState('')
  const [officeStreet, setOfficeStreet] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  // const [website, setWebsite] = useState('')


  const finishRegistration = () => {
    
    // ID's for the user and dataSet documents
    let userId = auth.currentUser.uid;
    let dataSetId = uuidv4();
    
    // Create the dataset document
    setDoc(doc(fsdb, "specialistDataSets", dataSetId), {
      officeCity: officeCity,
      officeLocation: officeLocation,
      officeNumber: officeNumber,
      officeStreet: officeStreet,
      shortDescription: shortDescription,
      website: website
    })

    // Reference to user and dataset document
    const userRef = doc(fsdb, 'users', userId)
    const dataSetRef = doc(fsdb, 'specialistDataSets', dataSetId)

    // Update the "user" document's "specialistData" field
    updateDoc(userRef, {
      specialistData: dataSetRef
    })


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

          {/* STREET, NUMBER, CITY */}
          <Text style={styles.textStyle}>Enter your office address: </Text>

          <View style={styles.buttonContainer}>

            <CustomTextInput text={"Street"} value={officeStreet} setText={setOfficeStreet}>
            </CustomTextInput>

            <CustomTextInput text={"Number"} value={officeNumber} setText={setOfficeNumber}>
            </CustomTextInput>

            <CustomTextInput text={"City"} value={officeCity} setText={setOfficeCity}>
            </CustomTextInput>

            <PurpleButton text={"FINISH REGISTRATION"} onPress={finishRegistration}>
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
