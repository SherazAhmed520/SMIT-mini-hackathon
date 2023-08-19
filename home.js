// Import the functions you need from the SDKs you need

import { app, auth } from "./firebase-config.js";
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


document.addEventListener("DOMContentLoaded", function () {
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const publishBtn = document.getElementById("btnPub");
    const titleInput = document.getElementById("blog_inp");
    const contentTextarea = document.getElementById("blogText");
    const blogsContainer = document.querySelector(".dashboard_blogs");

    publishBtn.addEventListener("click", async function () {
        const title = titleInput.value;
        const content = contentTextarea.value;

        if (title && content) {
            try {
                await db.collection("blogs").add({
                    title: title,
                    content: content,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                // Clear input fields
                titleInput.value = "";
                contentTextarea.value = "";

                // Fetch and display blogs
                fetchAndDisplayBlogs();
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    });

    function fetchAndDisplayBlogs() {
        blogsContainer.innerHTML = ""; // Clear existing blogs

        db.collection("blogs")
            .orderBy("timestamp", "desc")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const blog = doc.data();
                    const blogElement = document.createElement("div");
                    blogElement.className = "blog-entry";
                    blogElement.innerHTML = `
                        <h3>${blog.title}</h3>
                        <p>${blog.content}</p>
                    `;
                    blogsContainer.appendChild(blogElement);
                });
            });
    }

    // Initial fetch and display blogs
    fetchAndDisplayBlogs();
});
