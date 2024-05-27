import firebase from "firebase/compat/app";
import { getFirestore, collection, setDoc, doc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: " ",
  authDomain: " ",
  projectId: " ",
  storageBucket: " ",
  messagingSenderId: " ",
  appId: " ",
  measurementId: " "
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
const my_auth = getAuth(app);
export { my_auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc };
