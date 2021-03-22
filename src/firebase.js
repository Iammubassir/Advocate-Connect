import firebase from "firebase"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtX2jfWasHmepRlCvyVsj23C53wNmeejk",
    authDomain: "advocate-connect.firebaseapp.com",
    projectId: "advocate-connect",
    storageBucket: "advocate-connect.appspot.com",
    messagingSenderId: "790955158467",
    appId: "1:790955158467:web:a3fc15193b3ea5ce3f6b76",
    measurementId: "G-TQ4ZDVPB5K"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db;