import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQiGZNKrb5J3wYLzJXwxNNImxojuewnGk",
    authDomain: "e-commerce-db-44a01.firebaseapp.com",
    databaseURL: "https://e-commerce-db-44a01.firebaseio.com",
    projectId: "e-commerce-db-44a01",
    storageBucket: "e-commerce-db-44a01.appspot.com",
    messagingSenderId: "520382581096",
    appId: "1:520382581096:web:70e46acacc647e180f2edd",
    measurementId: "G-VQ7MD40CWH"
  };

//   export const createUserProfileDocument = async (userAuth , additionalData) => {
//     if(!userAuth) return;

//     const userRef = firestore.doc(`users/${userAuth.uid}`);

//     const snapShot = await userRef.get();

// if(!snapShot.exists){
//   const {displaName, email } = userAuth;
//   const createdAt = new Date();

//   try{
//     await userRef.set({
//       displaName,
//       email,
//       createdAt,
//       ...additionalData
//     });

//   }
//   catch(error){
//     console.log('error creating user', error.message);

//   }
  
// }

// return userRef;

//   } ;

//   firebase.initializeApp(config);
//   export const auth = firebase.auth();
//   export const firestore = firebase.firestore();

//   const provider = new firebase.auth.GoogleAuthProvider();

//   provider.setCustomParameters({prompt: 'select_account'});
//   export const signInWithGoogle = () => auth.signInWithPopup(provider);

//   export default firebase;

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;