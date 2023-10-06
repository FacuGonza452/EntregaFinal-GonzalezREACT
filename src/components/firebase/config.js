import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChhMmO7IkJ_kBmA_IMxpBuxuepeWie40o",
  authDomain: "e-commerce-gonzalez.firebaseapp.com",
  projectId: "e-commerce-gonzalez",
  storageBucket: "e-commerce-gonzalez.appspot.com",
  messagingSenderId: "482649414662",
  appId: "1:482649414662:web:7bed194b4da365208ab787",
  measurementId: "G-VK7Q06YV0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const initFirebase = () => app
 const db = getFirestore(app);

 export { db };