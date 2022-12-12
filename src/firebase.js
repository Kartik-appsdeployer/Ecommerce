//This is the initial setup of firebase to link with our application

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCaHf7BLFmUDLdfLzmVryUXVeet3s-zIqo",
  authDomain: "ecommerce-auth-79ccc.firebaseapp.com",
  projectId: "ecommerce-auth-79ccc",
  storageBucket: "ecommerce-auth-79ccc.appspot.com",
  messagingSenderId: "48947679623",
  appId: "1:48947679623:web:8e72aed427a38ee3950322"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export {app, db, auth};