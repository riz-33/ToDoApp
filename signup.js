import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js'

import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArskEuIydwncRw6bUgsjwMHTE4uy5FupY",
    authDomain: "to-do-app-ce607.firebaseapp.com",
    projectId: "to-do-app-ce607",
    storageBucket: "to-do-app-ce607.appspot.com",
    messagingSenderId: "811989245686",
    appId: "1:811989245686:web:57b6628f9d96ffffaa96d7",
    measurementId: "G-BWDX9TX3XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const register = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password.value !== confirmPassword.value) {
        Swal.fire({
            icon: "error",
            title: "Password Not Match",
        })
    }
    else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `You're Successfully Registered`,
            showConfirmButton: false,
            timer: 1500
        });
    }
    console.log(email.value, password.value, confirmPassword.value)
}

let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", register);