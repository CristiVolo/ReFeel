import { useNavigation } from '@react-navigation/native'
import React, {useEffect} from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity, BackHandler, Alert } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'

const LoginScreen = () => {
    const navigation = useNavigation()
    const handleLogInByEnteringCredentials = () => {
      navigation.replace("LoginEnterCredentials");
    }

    const handleLogInBySendingEmail = () => {
      navigation.replace("LoginSendEmail");
    }

    const handleLogInBySendingSMS = () => {
      navigation.replace("LoginSendSMS");
    }

    const handleSignUp = () => {
      navigation.replace("SignUp");
    }

    // Exit app
    // useEffect(() => {
    //   const backAction = () => {
    //     Alert.alert('Hold on!', 'Are you sure you want to go back?', [
    //       {
    //         text: 'Cancel',
    //         onPress: () => null,
    //         style: 'cancel',
    //       },
    //       { text: 'YES', onPress: () => BackHandler.exitApp() },
    //     ]);
    //     return true;
    //   };
  
    //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  
    //   return () => backHandler.remove();
    // }, []);

    return (
        <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        <Text style={styles.textStyle}>How would you like to log in ?</Text>
        <View style={styles.buttonContainer}>
        <PurpleButton text={"ENTER CREDENTIALS"} onPress={handleLogInByEnteringCredentials}>
        </PurpleButton>
        <PurpleButton text={"SEND CODE: E-MAIL"} onPress={handleLogInBySendingEmail}>
        </PurpleButton>
        <PurpleButton text={"SEND CODE: SMS"} onPress={handleLogInBySendingSMS}>
        </PurpleButton>
        
       </View>
      <View style={styles.button}>
        <TransparentButton text={"NOT A MEMBER YET ? COME AND JOIN US !"} onPress={handleSignUp}>
        </TransparentButton>
      </View>
    </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
