
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBWVZxMvh1cOjUz00QjzwdZYaqsFqWHAS8",
    authDomain: "videobelajar-de384.firebaseapp.com",
    projectId: "videobelajar-de384",
    storageBucket: "videobelajar-de384.appspot.com",
    messagingSenderId: "240429515112",
    appId: "1:240429515112:web:22951bdaf57cf9478216dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)