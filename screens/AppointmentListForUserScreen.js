import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity, ScrollView} from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'
import AppointmentBoxSpecialist from '../components/AppointmentBoxSpecialist'
import { auth, firestore, fsdb } from '../config/firebase'

const AppointmentListForUserScreen = ({ navigation: { navigate }, route }) => {
    
    let nameExample = 'Popescu Silvia'
    let dateExample = '11.01.2022'
    let timeExample = '14:00'
    let descriptionExample = 'ceva descriere a unei probleme'
    let array=[];
    const defaultFunction = () => {
        
    }

    const handleBack = () =>{
        navigate('Map');
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
        <Text style={styles.textStyle}s>Appointments :</Text>
        <ScrollView style={styles.scrollStyle}>
        <View style={styles.buttonContainer}>
            {
                route.params.querySnapshot.forEach((doc) => {
                    array.push(<AppointmentBoxSpecialist name={doc.data().specialistFirstName+" "+doc.data().specialistLastName} date={doc.data().date} time={doc.data().time+":00"} description={doc.data().shortDescription} clear={defaultFunction}>
                    </AppointmentBoxSpecialist>)
                    console.log(doc.data().specialistLastName)
                  })
            }
            {
                array.map((item, index) => {
                    return (
                      item
                    )
                  })
            }
        </View>
        </ScrollView>
        <View style={styles.button}>
        <PurpleButton text={'BACK'} onPress={handleBack}></PurpleButton>
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
