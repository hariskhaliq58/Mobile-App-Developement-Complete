import firebase from "firebase/compat/app";
import { getFirestore, collection, setDoc, doc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpXUupzh3unx2DV7e7ib2PQrUAIvmJ4lM",
  authDomain: "authentication-4ffe3.firebaseapp.com",
  projectId: "authentication-4ffe3",
  storageBucket: "authentication-4ffe3.appspot.com",
  messagingSenderId: "342136340656",
  appId: "1:342136340656:web:8f6af6b470da4e7e4afb75",
  measurementId: "G-5GLJD4SRBR"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
const my_auth = getAuth(app);
export { my_auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc };