import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2E-VZFjAAeUc1tubNvUKAvE1VhdwOvGE",
  authDomain: "pdf-tranzly.firebaseapp.com",
  projectId: "pdf-tranzly",
  storageBucket: "pdf-tranzly.firebasestorage.app",
  messagingSenderId: "253320025934",
  appId: "1:253320025934:web:4e8de66ab60bf7ce79f01f",
};

export const app = initializeApp(firebaseConfig);