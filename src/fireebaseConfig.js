// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVBzDNpIWmcUpfqsNz6QW-SxCObf61QCM",
  authDomain: "mawutech-solutions.firebaseapp.com",
  projectId: "mawutech-solutions",
  storageBucket: "mawutech-solutions.firebasestorage.app",
  messagingSenderId: "385310723356",
  appId: "1:385310723356:web:c8dd8fd7e181e45896fed9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
