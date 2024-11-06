import { Frame, Application } from '@nativescript/core';
import { auth } from './firebase.init.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import viewModel from './login-view-model.js';

/**
 * Handles page loaded event to set binding context.
 * @param {EventData} args 
 */
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = viewModel;
}

/**
 * Handles user sign-in.
 * @param {string} email 
 * @param {string} password 
 */
export function signIn(email, password) {
    // Show loading indicator or disable button here if needed
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed in successfully:", userCredential.user.email);
            
            // Let the auth state listener in app.js handle navigation
            // The onAuthStateChanged listener will automatically navigate to app-root
        })
        .catch((error) => {
            console.error("Sign-in error:", error);
            let errorMessage = "Failed to sign in";
            
            // Provide more specific error messages
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = "No account found with this email";
                    break;
                case 'auth/wrong-password':
                    errorMessage = "Incorrect password";
                    break;
                case 'auth/invalid-email':
                    errorMessage = "Invalid email address";
                    break;
                case 'auth/user-disabled':
                    errorMessage = "This account has been disabled";
                    break;
                default:
                    errorMessage = error.message;
            }
            
            alert(errorMessage);
        });
}

/**
 * Handles user sign-up.
 * @param {string} email 
 * @param {string} password 
 */
export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            // The auth state listener will handle navigation
        })
        .catch((error) => {
            console.error("Sign-up error:", error);
            alert(`Sign-up error: ${error.message}`);
        });
} 