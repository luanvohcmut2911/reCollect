import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC3EuohbTozOK9kkOy0F22RcFdFE-all_8",
  authDomain: "recollect-380404.firebaseapp.com",
  projectId: "recollect-380404",
  storageBucket: "recollect-380404.appspot.com",
  messagingSenderId: "701986446380",
  appId: "1:701986446380:web:11f2b9eaf44389cef40589",
  measurementId: "G-M1PSGW8Y4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//authentication
const auth = getAuth(app);

//database
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };
