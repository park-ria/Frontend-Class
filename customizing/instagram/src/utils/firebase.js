import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXO9L2ZpmSS2mVMlLOmURBE2vO8YnA6mE",
  authDomain: "ria-instagram.firebaseapp.com",
  projectId: "ria-instagram",
  storageBucket: "ria-instagram.appspot.com",
  messagingSenderId: "890530950686",
  appId: "1:890530950686:web:1618bbd9d011936d57080f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
