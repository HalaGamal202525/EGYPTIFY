// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARHkAEPkXwV4kCcQMvMMtDDmXeV8zBxiA",
  authDomain: "egyptify-348a1.firebaseapp.com",
  projectId: "egyptify-348a1",
  storageBucket: "egyptify-348a1.firebasestorage.app",
  messagingSenderId: "458982637380",
  appId: "1:458982637380:web:089594e64952c9fec46111",
  measurementId: "G-JSM2MJBVV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
export default app;