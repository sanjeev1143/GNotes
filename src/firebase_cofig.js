import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDnT4_frOCfTecs9fOfgnDJHK0rV-Zm0sY",
    authDomain: "notes-d67dc.firebaseapp.com",
    projectId: "notes-d67dc",
    storageBucket: "notes-d67dc.appspot.com",
    messagingSenderId: "518787124836",
    appId: "1:518787124836:web:cc85de1fd8d054a403d971",
    measurementId: "G-S1LJDVCBH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Db = getFirestore(app);