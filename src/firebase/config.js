import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyA-2O8ILGZQ3mSOhSkoxM62HGo-GfDPQ88",
  authDomain: "eshop-750a9.firebaseapp.com",
  projectId: "eshop-750a9",
  storageBucket: "eshop-750a9.appspot.com",
  messagingSenderId: "946348368755",
  appId: "1:946348368755:web:2d465435706a9d3b111b06",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
