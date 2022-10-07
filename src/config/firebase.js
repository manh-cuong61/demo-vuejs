import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVBFCwh_peJeR21zCEsYc_yCUF2Z5c-Zk",
  authDomain: "imoney-9c74a.firebaseapp.com",
  projectId: "imoney-9c74a",
  storageBucket: "imoney-9c74a.appspot.com",
  messagingSenderId: "324796911372",
  appId: "1:324796911372:web:bd986fc5df3af51a304329",
  measurementId: "G-DFNCRWRZVP",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
