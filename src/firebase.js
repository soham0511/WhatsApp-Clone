import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH0JumP_m1oOtLunl8qcZP6PmME4QSC-c",
  authDomain: "whatsapp-clone-f82d8.firebaseapp.com",
  projectId: "whatsapp-clone-f82d8",
  storageBucket: "whatsapp-clone-f82d8.appspot.com",
  messagingSenderId: "497113665106",
  appId: "1:497113665106:web:61efedf4f658561799d98b",
  measurementId: "G-K3VERB7WEN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
