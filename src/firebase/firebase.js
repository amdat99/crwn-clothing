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

  export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');
    
    const snapShot = await userRef.get();
    const collectionSnapShot = await collectionRef.get();
    console.log( {collection: collectionSnapShot.docs.map(doc => doc.data())})

    if(!snapShot.exists){
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

   export const collectionsSnapshotToMap = (collections) => {
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


  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const SignInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;