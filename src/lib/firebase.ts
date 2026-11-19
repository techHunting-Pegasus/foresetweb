import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACdrDN7-EcLS7w7nneqxI2qsprEXAFN74",
  authDomain: "thelosttrail.firebaseapp.com",
  projectId: "thelosttrail",
  storageBucket: "thelosttrail.firebasestorage.app",
  messagingSenderId: "996674727133",
  appId: "1:996674727133:web:548703885c05a81c09ff34",
  measurementId: "G-TDELKBSPVP"
};

export function getFirebaseApp() {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}
