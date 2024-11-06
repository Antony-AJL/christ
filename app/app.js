import { Application, Frame } from '@nativescript/core';
import { app, auth } from './firebase.init.js';

// Initialize Firebase
try {
    global.firebaseApp = app;
    global.firebaseAuth = auth;
    console.log("Firebase initialization complete");
} catch (error) {
    console.error("Failed to initialize Firebase:", error);
}

// Create a root frame for the application
const rootFrame = new Frame();
Application.run({ create: () => rootFrame });

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in:", user);
        rootFrame.navigate({
            moduleName: 'app-root',
            clearHistory: true
        });
    } else {
        console.log("No user is signed in.");
        rootFrame.navigate({
            moduleName: 'login-page',
            clearHistory: true
        });
    }
});
