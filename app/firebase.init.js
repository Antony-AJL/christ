import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Import other Firebase services as needed
// import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyACXslqPw5LjyHMlnKqQOYmQ7V9Pe3OseM",
    authDomain: "christ-4325f.firebaseapp.com",
    projectId: "christ-4325f",
    storageBucket: "christ-4325f.firebasestorage.app",
    messagingSenderId: "603399946005",
    appId: "1:603399946005:web:763a3be2ee458df3f3731c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
// const db = getFirestore(app);

export { app, auth /*, db */ }; 