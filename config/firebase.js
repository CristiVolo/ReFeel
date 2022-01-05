import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUTbwfwV1_lZIn6IFaIDTAOlRdWqTHgHQ",
    authDomain: "refeel-2adc5.firebaseapp.com",
    projectId: "refeel-2adc5",
    storageBucket: "refeel-2adc5.appspot.com",
    messagingSenderId: "926566768726",
    appId: "1:926566768726:web:7e3cc2f6918dfe4ed51bf7",
    measurementId: "G-GBD713XE36"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };