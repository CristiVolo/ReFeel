import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'
import ModalDropdown from 'react-native-modal-dropdown';


const SignUpScreen = () => {
    const navigation = useNavigation()
    const handleRegistration = () => {
      navigation.replace("Login");
    }

    const handleSelect=(e)=> {
      console.log(e);
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

        <CustomTextInput text={"e.g: xavarin@gmail.com"}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter your phone number : </Text>
        <CustomTextInput text={"Phone Number"}>
        </CustomTextInput>

        <Text style={styles.textStyle}>Enter your password : </Text>
        <SecureTextInput text={"Password"}>
        </SecureTextInput>

        <SecureTextInput text={"Confirm Password"}>
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
