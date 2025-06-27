// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBG9aEut1UCHEGj02oqBQ1i1bUbUktXVpQ",
  authDomain: "printo-dashboard.firebaseapp.com",
  projectId: "printo-dashboard",
  storageBucket: "printo-dashboard.appspot.com", // ✅ must end in .appspot.com
  messagingSenderId: "329054549770",
  appId: "1:329054549770:web:9f172e77ba5ddb4a3becf3"
};

// ✅ Initialize app FIRST
const app = initializeApp(firebaseConfig);

// ✅ Then initialize services
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
