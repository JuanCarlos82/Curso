// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDjz85QJgtubAGe4s_lhEcZX64ORq5QR_g",
  authDomain: "curso-apps92.firebaseapp.com",
  projectId: "curso-apps92",
  storageBucket: "curso-apps92.appspot.com",
  messagingSenderId: "897811104873",
  appId: "1:897811104873:web:a0c21f6573579a55b90ef8",
  measurementId: "G-V93J27R5N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);