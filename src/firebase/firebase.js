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
  };

  export const createUserProfileDoc = async (userAuth, additionalData) => { // handles google and emailsignin
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();   
    // const collectionRef = firestore.collection('users');  // get user collection data
    // const collectionSnapShot = await collectionRef.get(); // 
    // console.log( {collection: collectionSnapShot.docs.map(doc => doc.data())})

    if(!snapShot.exists){  // createes new user info 
      const { displayName, email} = userAuth;
      const createdAt = new Date ();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.error('error creating user', error.message);
      }
    }
    return userRef;
  }
// funtion to add objects to firestores
  export const addCollectionDocuments = async (collectionKey, objectsToAdd) => {  
    const collectionRef = firestore.collection(collectionKey); // firestore creates a new collection
   
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()  // firestore creates UID
      batch.set(newDocRef, obj)  // adds object into firestore with UID
    });
    return await batch.commit()
  }

   export const collectionsSnapshotToMap = (collections) => {  // get the collection douciment from firstore
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
 
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc
  },{})
}

export const getCurrentUser =() => {  
  return new Promise((resolve, reject) => {  // cheks to see if user is signedin 
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{ //if sign in state changes
      unsubscribe();      //unsubscribe/closes session
      resolve(userAuth)
    } ,reject)
  })
}

  firebase.initializeApp(config);

  export const auth = firebase.auth() 
  export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider(); //handle signin prompt
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;