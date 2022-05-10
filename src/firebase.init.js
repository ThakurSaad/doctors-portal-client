// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuOBBZi0D1P2UH3uU27Ije_q4s-SrTUJI",
  authDomain: "doctors-portal-31ca7.firebaseapp.com",
  projectId: "doctors-portal-31ca7",
  storageBucket: "doctors-portal-31ca7.appspot.com",
  messagingSenderId: "32799603664",
  appId: "1:32799603664:web:08c2db13f569523fa457d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
