import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBz0gagyNOkyU6L8hvnqRIp5uPNiVYtlrU",
    authDomain: "notes-1f749.firebaseapp.com",
    projectId: "notes-1f749",
    storageBucket: "notes-1f749.appspot.com",
    messagingSenderId: "450632423786",
    appId: "1:450632423786:web:cb1feb4814dfa93d052d13",
    measurementId: "G-JHMVCH3Z2E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Db = getFirestore(app);
