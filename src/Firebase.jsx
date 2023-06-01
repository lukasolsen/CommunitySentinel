import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXnZxymenhdQnzNQ2h4bcydOXRWgc6K4A",
    authDomain: "communitysentinel-9820b.firebaseapp.com",
    projectId: "communitysentinel-9820b",
    storageBucket: "communitysentinel-9820b.appspot.com",
    messagingSenderId: "554355532299",
    appId: "1:554355532299:web:452e70536eac57393e1d0e",
    measurementId: "G-C9CJ9GSK9V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
