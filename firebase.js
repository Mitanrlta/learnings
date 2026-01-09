// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Import Authentication & Firestore
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase configuration (SUDAH ADA)
const firebaseConfig = {
  apiKey: "AIzaSyCdnIXBD2-gt5WwXzlCZ3ofnrkd_uDGCPM",
  authDomain: "web-pembelajaran-tekpen.firebaseapp.com",
  projectId: "web-pembelajaran-tekpen",
  storageBucket: "web-pembelajaran-tekpen.firebasestorage.app",
  messagingSenderId: "92644146358",
  appId: "1:92644146358:web:1a245bed3a4ecd92fa3a17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
