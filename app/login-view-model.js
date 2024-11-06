import { fromObject } from '@nativescript/core';
import { signIn, signUp } from './login-page.js';

const viewModel = fromObject({
    email: '',
    password: '',
    onSignIn: function() {
        const email = this.get('email').trim();
        const password = this.get('password').trim();
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        
        signIn(email, password);
    },
    onSignUp: function() {
        const email = this.get('email').trim();
        const password = this.get('password').trim();
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        
        signUp(email, password);
    }
});

/**
 * Validates the email format.
 * @param {string} email 
 * @returns {boolean}
 */
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default viewModel; 