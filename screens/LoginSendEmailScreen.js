import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'


const LoginSendEmailScreen = () => {
    const navigation = useNavigation()
    const handleLogInByEnteringEmail = () => {
      navigation.replace("LoginEnterCode");
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
        <Text style={styles.textStyle}>Enter Your E-Mail Address</Text>
        <View style={styles.buttonContainer}>
        <CustomTextInput text={"E-MAIL ADDRESS"}>
        </CustomTextInput>
        <PurpleButton text={"CONFIRM ADDRESS"} onPress={handleLogInByEnteringEmail}>
        </PurpleButton>
        <Text style={styles.textStyle}>*We will send you an E-Mail 
        that contains an unique code.
        Afterwards, simply enter 
        the recieved code to complete 
        the authentication process.
        </Text>
       </View>
    </KeyboardAvoidingView>
    )
}

export default LoginSendEmailScreen

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
