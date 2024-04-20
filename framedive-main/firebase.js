import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDpHCpXpJMNWFScR-VaWqo-vJRF7pxgjkg",
  authDomain: "framedive-22a49.firebaseapp.com",
  projectId: "framedive-22a49",
  storageBucket: "framedive-22a49.appspot.com",
  messagingSenderId: "102610384957",
  appId: "1:102610384957:web:972c584b7b3dea7abf1254",
  measurementId: "G-BEEQE0XDQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
