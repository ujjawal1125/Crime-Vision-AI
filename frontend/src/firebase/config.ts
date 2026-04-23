import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "enter api key",
  authDomain: "enter your firebase credentials",
  projectId: "enter your firebase credentials",
  storageBucket: "enter your firebase credentials",
  messagingSenderId: "enter your firebase credentials",
  appId: "enter your firebase credentials"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
