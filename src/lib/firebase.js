// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD_yEiZh0JT-lLWIPbc9xInFuFrvwQDRO4',
	authDomain: 'fireship-svelte-ee0b9.firebaseapp.com',
	projectId: 'fireship-svelte-ee0b9',
	storageBucket: 'fireship-svelte-ee0b9.appspot.com',
	messagingSenderId: '263772667528',
	appId: '1:263772667528:web:2669ae1dde8351351c693d',
	measurementId: 'G-HZ2R75FXK5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
