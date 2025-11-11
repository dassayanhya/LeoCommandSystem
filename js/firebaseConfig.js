// js/firebaseConfig.js
// Replace the following config with your project's config object from Firebase Console
// Make sure you've enabled Authentication (Email/Password) and Firestore

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrBJPBLRsgmfDJhjOD2YMwlMRPRAVSjN0",
  authDomain: "lccv2-1dd39.firebaseapp.com",
  projectId: "lccv2-1dd39",
  storageBucket: "lccv2-1dd39.firebasestorage.app",
  messagingSenderId: "999946532877",
  appId: "1:999946532877:web:3d48306a1314b66c3cbd44",
  measurementId: "G-SWZLKNF28P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
