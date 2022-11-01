import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1pS3Fypbi3sv0g7ySVQ8wLEsvRFxT7PQ",
  authDomain: "notes-10c31.firebaseapp.com",
  projectId: "notes-10c31",
  storageBucket: "notes-10c31.appspot.com",
  messagingSenderId: "654426243795",
  appId: "1:654426243795:web:3172f1042e5491af974a26",
  measurementId: "G-CDTP3GZKN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Db = getFirestore(app);
