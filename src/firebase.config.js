import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoxpR_DhVonCVCEWcQumzsYBbD3SnU160",
    authDomain: "house-marketplace-app-15852.firebaseapp.com",
    projectId: "house-marketplace-app-15852",
    storageBucket: "house-marketplace-app-15852.appspot.com",
    messagingSenderId: "172802805087",
    appId: "1:172802805087:web:7e1a1fa8540c17c7723aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()