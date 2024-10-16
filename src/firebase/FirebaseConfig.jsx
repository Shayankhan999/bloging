// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import App from "../App";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGP-5nFX7wX8xaPufnCCJn695s3hfsw6Q",
  authDomain: "myblog-beac0.firebaseapp.com",
  projectId: "myblog-beac0",
  storageBucket: "myblog-beac0.appspot.com",
  messagingSenderId: "377117385908",
  appId: "1:377117385908:web:99eff6341c78144bdc23e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);

export {fireDb,auth,storage}