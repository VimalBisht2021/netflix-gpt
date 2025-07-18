// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ2SqTpW2_c1jmh98xVhgasIBjeOHiyvQ",
  authDomain: "netflix-a828d.firebaseapp.com",
  projectId: "netflix-a828d",
  storageBucket: "netflix-a828d.firebasestorage.app",
  messagingSenderId: "162120193651",
  appId: "1:162120193651:web:e7c87da6fc7e394401fc06",
  measurementId: "G-PGGNF0VV7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
