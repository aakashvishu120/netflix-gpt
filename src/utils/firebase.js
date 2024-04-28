// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCp5HMX980wsO2i3183ofU9FmvsGxzF7L0",
    authDomain: "netflix-gpt-91f19.firebaseapp.com",
    projectId: "netflix-gpt-91f19",
    storageBucket: "netflix-gpt-91f19.appspot.com",
    messagingSenderId: "240959265709",
    appId: "1:240959265709:web:9ba49c1df2017a2a3b9f24",
    measurementId: "G-CBGW8D8B2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
