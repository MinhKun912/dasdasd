// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEhzDArPPiAechf_9BtmyONMywemmx-Z4",
    authDomain: "md2reactjs.firebaseapp.com",
    projectId: "md2reactjs",
    storageBucket: "md2reactjs.appspot.com",
    messagingSenderId: "102702723200",
    appId: "1:102702723200:web:7b11fcea35fac15fe0f665"
};
let image = '';
let fbBucketName = 'images';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
