// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF1ob1RxHeu7ITZhr3uHk5ThvskoQMk0Q",
  authDomain: "social-media-app-ff501.firebaseapp.com",
  projectId: "social-media-app-ff501",
  storageBucket: "social-media-app-ff501.firebasestorage.app",
  messagingSenderId: "153621077980",
  appId: "1:153621077980:web:77392a2515338f4ac9b919",
  measurementId: "G-VEBY26H6W6",
  databaseURL: "https://social-media-app-ff501-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);
const fireStore = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, database, storage, fireStore, auth };
