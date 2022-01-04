import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import CustomTextInput from '../components/TextInput'
import SecureTextInput from '../components/SecureTextInput'


const LoginSendSMSScreen = () => {
    const navigation = useNavigation()
    const handleLogInByEnteringSMS = () => {
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
        <Text style={styles.textStyle}>Enter Your Phone Number</Text>
        <View style={styles.buttonContainer}>
        <CustomTextInput text={"Phone Number"}>
        </CustomTextInput>
        <PurpleButton text={"CONFIRM NUMBER"} onPress={handleLogInByEnteringSMS}>
        </PurpleButton>
        <Text style={styles.textStyle}>*We will send you an SMS 
        that contains an unique code.
        Afterwards, simply enter 
        the recieved code to complete 
        the authentication process.
        </Text>
       </View>
    </KeyboardAvoidingView>
    )
}

export default LoginSendSMSScreen

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
