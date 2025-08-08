import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsg6oGyayMD2ADVQ8cka4pCDVqKH8VrQY",
  authDomain: "personal-portfolio-c1ba1.firebaseapp.com",
  projectId: "personal-portfolio-c1ba1",
  storageBucket: "personal-portfolio-c1ba1.firebasestorage.app",
  messagingSenderId: "1067564199576",
  appId: "1:1067564199576:web:4b5fa47bc01b1c9099aaed",
  measurementId: "G-9JQBTQTXQW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
