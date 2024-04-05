// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpo0_2Yh9jenQKPiNVHYJ1-0IZ3d79gCE",
  authDomain: "hatomugi-shopp.firebaseapp.com",
  projectId: "hatomugi-shopp",
  storageBucket: "hatomugi-shopp.appspot.com",
  messagingSenderId: "187817439244",
  appId: "1:187817439244:web:46c2d140a5b1b2d6abbe29",
  measurementId: "G-GLLQJQVWBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
