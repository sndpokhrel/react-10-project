// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpltT1TeMFdc66hEraNuhXVRGFaIknwY4",
  authDomain: "contact-project-vite.firebaseapp.com",
  projectId: "contact-project-vite",
  storageBucket: "contact-project-vite.appspot.com",
  messagingSenderId: "710992498677",
  appId: "1:710992498677:web:791d5b170b2056c4e35abc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
