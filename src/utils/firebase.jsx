// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBF1ob1RxHeu7ITZhr3uHk5ThvskoQMk0Q",
  authDomain: "social-media-app-ff501.firebaseapp.com",
  projectId: "social-media-app-ff501",
  storageBucket: "social-media-app-ff501.firebasestorage.app",
  messagingSenderId: "153621077980",
  appId: "1:153621077980:web:77392a2515338f4ac9b919",
  measurementId: "G-VEBY26H6W6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
