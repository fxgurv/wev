// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEMqMuUDKZUpETxyLMXJ52Xs0Dw3vN5aI",
  authDomain: "shorts-6e2bf.firebaseapp.com",
  projectId: "shorts-6e2bf",
  storageBucket: "shorts-6e2bf.firebasestorage.app",
  messagingSenderId: "266895143110",
  appId: "1:266895143110:web:cd70698a39cebf6a3f27c7",
  measurementId: "G-LYW70RLW16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
