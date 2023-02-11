// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgZhbR9FysWFSVcZSK_q6GkVr1ayKvwo8",
    authDomain: "chasse-au-tresor-96b7a.firebaseapp.com",
    projectId: "chasse-au-tresor-96b7a",
    storageBucket: "chasse-au-tresor-96b7a.appspot.com",
    messagingSenderId: "354598210128",
    appId: "1:354598210128:web:a0bb661503c77c33465f55",
    measurementId: "G-5NKD30JNJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app