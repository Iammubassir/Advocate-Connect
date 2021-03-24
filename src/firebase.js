import firebase from "firebase"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr442CO1zK_yMSHi7IHOF8QwXJxAHIv0s",
  authDomain: "advocateconnect-9c048.firebaseapp.com",
  projectId: "advocateconnect-9c048",
  storageBucket: "advocateconnect-9c048.appspot.com",
  messagingSenderId: "421519095631",
  appId: "1:421519095631:web:5593a827c6858ca7bff73a",
  measurementId: "G-D976B3T8DZ"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db;