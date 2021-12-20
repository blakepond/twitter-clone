import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCdILe5ilq-rSdniEGpQA15MDr-AYblrKo",
    authDomain: "twitter-clone-45827.firebaseapp.com",
    projectId: "twitter-clone-45827",
    storageBucket: "twitter-clone-45827.appspot.com",
    messagingSenderId: "369623059513",
    appId: "1:369623059513:web:d33ff5b4e2aec87ca091e8"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };