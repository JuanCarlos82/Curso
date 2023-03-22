// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*
const firebaseConfig = {
  apiKey: "AIzaSyBH0XUUtzlLs1n16W3MabgM6dHf0BSegY4",
  authDomain: "s9react-cfed8.firebaseapp.com",
  projectId: "s9react-cfed8",
  storageBucket: "s9react-cfed8.appspot.com",
  messagingSenderId: "525164105454",
  appId: "1:525164105454:web:f9e87c9996aa8fd998edff"
};
*/
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