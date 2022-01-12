import { useNavigation } from '@react-navigation/native'
import React, {useEffect} from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity, BackHandler, Alert } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, firestore, fsdb } from '../config/firebase'
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const LoginScreen = () => {
    const navigation = useNavigation()
    const handleSeeAppointments = async () => {
        const userRef = doc(fsdb, 'users', auth.currentUser.uid);
        const q = query(collection(fsdb, "appointments"), where("specialist", "==", userRef), where("status", "==", true))
        const querySnapshot = await getDocs(q);
        navigation.navigate('AppointmentListForSpecialist', {querySnapshot: querySnapshot});
    }

    const handleSeeRequests = async () => {
        const userRef = doc(fsdb, 'users', auth.currentUser.uid);
        const q = query(collection(fsdb, "appointments"), where("specialist", "==", userRef), where("status", "==", false))
        const querySnapshot = await getDocs(q);
        navigation.navigate('AppointmentRequest', {querySnapshot: querySnapshot});
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
        navigation.replace("Login");
        }).catch((error) => {
        // An error happened.
        });
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
        
        <View style={styles.buttonContainer}>
        <PurpleButton text={"SEE APPOINTMENTS"} onPress={handleSeeAppointments}>
        </PurpleButton>
        <PurpleButton text={"SEE REQUESTS"} onPress={handleSeeRequests}>
        </PurpleButton>
        
       </View>
       <View>
       <PurpleButton text={"SIGN OUT"} onPress={handleSignOut}></PurpleButton>
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
      },

      
       button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      }
})
