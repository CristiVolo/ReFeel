import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import LoginEnterCredentialsScreen from './screens/LoginEnterCredentialsScreen';
import LoginSendEmailScreen from './screens/LoginSendEmailScreen';
import LoginSendSMSScreen from './screens/LoginSendSMSScreen';
import LoginEnterCodeScreen from './screens/LoginEnterCodeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SpecialistDataScreen from './screens/SpecialistDataScreen'
import home from './screens/home'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import MapScreen from './screens/MapScreen';
import OfficePageScreen from './screens/OfficePageScreen';
import MakeAppointmentScreen from './screens/MakeAppointmentScreen';
import AppointmentListForUserScreen from './screens/AppointmentListForUserScreen';
import AppointmentListForSpecialistScreen from './screens/AppointmentListForSpecialistScreen';
import SpecialistMenuScreen from './screens/SpecialistMenuScreen';
import AppointmentRequestScreen from './screens/AppointmentRequestScreen'

const Stack = createNativeStackNavigator(
  
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="Map" component={MapScreen} />
        <Stack.Screen options={{headerShown: false}} name="SpecialistMenu" component={SpecialistMenuScreen} />
        <Stack.Screen options={{headerShown: false}} name="AppointmentListForUser" component={AppointmentListForUserScreen} />
        <Stack.Screen options={{headerShown: false}} name="AppointmentListForSpecialist" component={AppointmentListForSpecialistScreen} />
        <Stack.Screen options={{headerShown: false}} name="AppointmentRequest" component={AppointmentRequestScreen} />
        <Stack.Screen options={{headerShown: false}} name="OfficePage" component={OfficePageScreen} />
        <Stack.Screen options={{headerShown: false}} name="MakeAppointment" component={MakeAppointmentScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginEnterCredentials" component={LoginEnterCredentialsScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginSendEmail" component={LoginSendEmailScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginSendSMS" component={LoginSendSMSScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginEnterCode" component={LoginEnterCodeScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown: false}} name="SpecialistData" component={SpecialistDataScreen} />
        <Stack.Screen options={{headerShown: false}} name="home" component={home} />
        <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
