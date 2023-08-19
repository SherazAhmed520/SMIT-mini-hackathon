
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOtfLxW-H9_EIkCUiN3KXNkNtbaag_Xn0",
  authDomain: "todo-e5bcd.firebaseapp.com",
  projectId: "todo-e5bcd",
  storageBucket: "todo-e5bcd.appspot.com",
  messagingSenderId: "769626887417",
  appId: "1:769626887417:web:7098884ba67492dda8be28",
  measurementId: "G-68Z7L6ZSWC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{app,db}