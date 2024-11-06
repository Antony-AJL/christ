import { auth } from '../firebase.init.js';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Listens for authentication state changes.
 * @param {Auth} authInstance - The Firebase Auth instance.
 * @param {function} callback - The callback to execute on auth state change.
 */
export function onAuthStateChangedListener(authInstance, callback) {
    onAuthStateChanged(authInstance, callback);
}

/**
 * Alias for onAuthStateChangedListener for easier import.
 */
export { onAuthStateChangedListener as onAuthStateChanged }; 