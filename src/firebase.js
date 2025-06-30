// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "health-managements",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (secured with best practices)
const firebaseConfig = {
  apiKey: "AIzaSyCVBzDNpIWmcUpfqsNz6QW-SxCObf61QCM",
  authDomain: "mawutech-solutions.firebaseapp.com",
  projectId: "mawutech-solutions",
  storageBucket: "mawutech-solutions.firebasestorage.app",
  messagingSenderId: "385310723356",
  appId: "1:385310723356:web:c8dd8fd7e181e45896fed9"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { app, analytics, auth, db };