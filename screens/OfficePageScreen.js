import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import PurpleButton from '../components/PurpleButton'
import TransparentButton from '../components/TransparentButton'

const OfficePageScreen = ({ navigation: { navigate } }) => {
    
    let officeNameExample = 'Dr. POPESCU SILVIA - Medic Specialist PSIHIATRIE PEDIATRICĂ; Competență în PSIHOTERAPIE'
    let addressExample = 'Intrarea Martir Ianoş Paris 11, Timișoara'
    let siteExample = 'https://dr-popescu-silvia.business.site/ '
    let phoneExample = '+40720195894'
    let userNameExample = 'PopescuSilvia1997'
    let emailExample = 'dr.silviapopescu@gmail.com'


    const handleAppointment = () => {
        navigate("MakeAppointment");
    }

    const defaultFunction = () =>{
      
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
        <Text style={styles.textStyle}s>{officeNameExample}</Text>
        <View style={styles.buttonContainer}>
        <Text style={styles.textStyle}s>{addressExample}</Text>
        <Text style={styles.textStyle}s>{siteExample}</Text>
        <Text style={styles.textStyle}s>{phoneExample}</Text>
        <Text style={styles.textStyle}s>{userNameExample}</Text>
        <Text style={styles.textStyle}s>{emailExample}</Text>
        </View>
        <View style={styles.button}>
        <PurpleButton text={'CALL'} onPress={defaultFunction}></PurpleButton>
        <PurpleButton text={'MAKE APPOINTMENT'} onPress={handleAppointment}></PurpleButton>
        </View>
    </KeyboardAvoidingView>
    )
}

export default OfficePageScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        width: '90%',
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
        color: '#50048B',
        marginBottom: 10,
      },
      button:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      }
})
