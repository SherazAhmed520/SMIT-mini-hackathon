// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgMFlUT3K81UU1DIZzhX0SYV-nObLE4jQ",
  authDomain: "myfirstproject-35018.firebaseapp.com",
  projectId: "myfirstproject-35018",
  storageBucket: "myfirstproject-35018.appspot.com",
  messagingSenderId: "745045164192",
  appId: "1:745045164192:web:7c76e5c8e18fe43da8c9c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



var btn= document.getElementById('btn');
btn.addEventListener('submit', (e)=>{
  e.preventDefault()
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert('Login Successful')
    window.location.href="index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
})

