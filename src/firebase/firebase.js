import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCqQYlad2FIBPYO5DXGgt60WdU4ZvnGt4Y",
    authDomain: "crwn-db-9b80d.firebaseapp.com",
    projectId: "crwn-db-9b80d",
    storageBucket: "crwn-db-9b80d.appspot.com",
    messagingSenderId: "1081500464579",
    appId: "1:1081500464579:web:0aba6057f2c9b27ab6f976",
    measurementId: "G-GHEWQXG2QF"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const SignInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;