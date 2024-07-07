import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC06IDbHR9e2pkuSdUdcyP6DOnYxS2gVCg",
  authDomain: "stumpline-livescores-website.firebaseapp.com",
  projectId: "stumpline-livescores-website",
  storageBucket: "stumpline-livescores-website.appspot.com",
  messagingSenderId: "24981791814",
  appId: "1:24981791814:web:fbfc44bef75f520f8a1647",
  measurementId: "G-KG7GL4TL65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth, onAuthStateChanged };
