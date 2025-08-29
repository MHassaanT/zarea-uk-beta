// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw-Kye5h02sJHyEpPCwdC9XNMbTjklT-0",
  authDomain: "zareauk.firebaseapp.com",
  projectId: "zareauk",
  storageBucket: "zareauk.firebasestorage.app",
  messagingSenderId: "140669174214",
  appId: "1:140669174214:web:0496bdb226369cfcad72c7",
  measurementId: "G-9CZ9933222",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);