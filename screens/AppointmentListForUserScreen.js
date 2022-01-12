import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity, ScrollView} from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import AppointmentBoxUser from '../components/AppointmentBoxUser'
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore, fsdb } from '../config/firebase'

const AppointmentListForUserScreen = () => {
    
    let specialistNameExample = 'Popescu Silvia'
    let dateExample = '11.01.2022'
    let timeExample = '14:00'
    let addressExample = 'Calea Aradului nr. 48'
    let statusExample = 'Not accepted by doctor yet'
    
    const defaultFunction = async() => {
      const docRef = doc(fsdb, "appointments", "templateAppointment");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().age);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
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
        <Text style={styles.textStyle}s>Your Appointments :</Text>
        <ScrollView style={styles.scrollStyle}>
        <View style={styles.buttonContainer}>
          <AppointmentBoxUser specialistName={specialistNameExample} date={dateExample} time={timeExample} address={addressExample} status={statusExample} clear={defaultFunction}>
          </AppointmentBoxUser>
        </View>
        </ScrollView>
        <View style={styles.button}>
        <PurpleButton text={'BACK'} onPress={defaultFunction}></PurpleButton>
        </View>
    </KeyboardAvoidingView>
    )
}

export default AppointmentListForUserScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        width: '100%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      textStyle:{
        marginTop: 60,
        color: '#50048B',
        marginBottom: 10,
      },
      button:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },

      scrollStyle: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 40,
      },
})
