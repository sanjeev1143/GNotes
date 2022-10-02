import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbEvp2vtblcJ0o1WR-BDx_AyoO7wjwpl8",
    authDomain: "notes-1f870.firebaseapp.com",
    databaseURL: "https://notes-1f870-default-rtdb.firebaseio.com",
    projectId: "notes-1f870",
    storageBucket: "notes-1f870.appspot.com",
    messagingSenderId: "854350828256",
    appId: "1:854350828256:web:7497b11456144c67f27685",
    measurementId: "G-8GPJ06ELK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Db = getFirestore(app);