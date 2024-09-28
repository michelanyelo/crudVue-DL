// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxQQSyxyhciX4nXbJH66VTJdbaIENSaU4",
    authDomain: "customers-7bedf.firebaseapp.com",
    projectId: "customers-7bedf",
    storageBucket: "customers-7bedf.appspot.com",
    messagingSenderId: "323277782950",
    appId: "1:323277782950:web:ebc9b05d43db97b8371967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db = getFirestore(app)

export { $db };