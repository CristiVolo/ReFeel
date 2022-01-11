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


const MakeAppointmentScreen = ({ navigation: { navigate }, route }) => {
  

    const defaultFunction=()=> {
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
  
        <Text style={styles.textStyle}>Enter first and last names : </Text>
        <CustomTextInput text={"e.g: John"} setText={defaultFunction}>
        </CustomTextInput>

        <CustomTextInput text={"e.g: Doe"} setText={defaultFunction}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter age : </Text>
        <CustomTextInput text={"e.g: 25"} setText={defaultFunction}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter gender : </Text>
        <CustomTextInput text={"gender"} setText={defaultFunction}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter a short description of problem : </Text>
        <CustomTextInput text={"Description"} setText={defaultFunction}>
        </CustomTextInput>

        <PurpleButton text={"COMFIRM"} onPress={defaultFunction}>
        </PurpleButton>
       </View>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default MakeAppointmentScreen

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
