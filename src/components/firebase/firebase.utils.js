import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC5qghGsF4Jb6xidKI1OeYg7O2YGKEgDn8",
  authDomain: "crwn-clothing-app-db020.firebaseapp.com",
  databaseURL: "https://crwn-clothing-app-db020-default-rtdb.firebaseio.com",
  projectId: "crwn-clothing-app-db020",
  storageBucket: "crwn-clothing-app-db020.appspot.com",
  messagingSenderId: "244380759529",
  appId: "1:244380759529:web:c18ddad241fd7b8874c778",
  measurementId: "G-Q56HFTBFSX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;

    const createdAt = new Date(); 

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }

    catch(error){
      console.log("User can't be created", error.message)
    }
  }
  return userRef;
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider(); 

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;