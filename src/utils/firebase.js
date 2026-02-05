import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",
  authDomain: "packing-8b3de.firebaseapp.com",
  databaseURL: "https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "packing-8b3de",
  storageBucket: "packing-8b3de.firebasestorage.app",
  messagingSenderId: "109766093944",
  appId: "1:109766093944:web:35b8d72158750ab522d18d",
  measurementId: "G-GRY36B729W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const provider = new GoogleAuthProvider();
