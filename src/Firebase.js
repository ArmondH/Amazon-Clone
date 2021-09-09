import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDW8-1Vw8HeyfBTl7IwC8zyqRHeX1R8WO0",
    authDomain: "clone-17a11.firebaseapp.com",
    projectId: "clone-17a11",
    storageBucket: "clone-17a11.appspot.com",
    messagingSenderId: "223916300509",
    appId: "1:223916300509:web:468be8daa31dd2cdf8a334",
    measurementId: "G-LMV8NC8KQK"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };