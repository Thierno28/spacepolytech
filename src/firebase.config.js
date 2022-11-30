import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAG_wE2i3dtlY5iUWrYQ-nnkNwHEKmnF_o",
  authDomain: "spacepolytech.firebaseapp.com",
  projectId: "spacepolytech",
  storageBucket: "spacepolytech.appspot.com",
  messagingSenderId: "1096418079754",
  appId: "1:1096418079754:web:9c5d5ad2d8505f24275bf3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
