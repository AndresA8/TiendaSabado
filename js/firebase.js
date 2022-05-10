// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoPKzMPeV4K4wMxRQa5-vPSvd2ph7Z9oU",
  authDomain: "andrestiendaces.firebaseapp.com",
  projectId: "andrestiendaces",
  storageBucket: "andrestiendaces.appspot.com",
  messagingSenderId: "753837206444",
  appId: "1:753837206444:web:667e6e5f1db6307c8f6809",
  measurementId: "G-6HQH72W8D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);