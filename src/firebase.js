import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "todo-firebase-85c29.appspot.com",
  messagingSenderId: "732043291513",
  appId: process.env.REACT_APP_FIREBASE_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore()

console.log(db)