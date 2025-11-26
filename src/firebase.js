import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCuNNmgig0PHR1XQXreD9OgwJRoCxPOhvU",
  authDomain: "spacepedia-f5ac4.firebaseapp.com",
  databaseURL: "https://spacepedia-f5ac4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spacepedia-f5ac4",
  storageBucket: "spacepedia-f5ac4.firebasestorage.app",
  messagingSenderId: "532323484040",
  appId: "1:532323484040:web:caf665bde20fc8cef87a3d",
  measurementId: "G-ZT6TBH3QRB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
