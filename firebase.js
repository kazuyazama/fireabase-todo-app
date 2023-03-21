import firebase, { getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "test-app-33c35.firebaseapp.com",
  projectId: "test-app-33c35",
  storageBucket: "test-app-33c35.appspot.com",
  messagingSenderId: "449052828478",
  appId: "1:449052828478:web:4c7bb2368762001149426f",
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
