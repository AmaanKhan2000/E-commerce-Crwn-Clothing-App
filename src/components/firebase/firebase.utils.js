import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC5qghGsF4Jb6xidKI1OeYg7O2YGKEgDn8",
  authDomain: "crwn-clothing-app-db020.firebaseapp.com",
  projectId: "crwn-clothing-app-db020",
  storageBucket: "crwn-clothing-app-db020.appspot.com",
  messagingSenderId: "244380759529",
  appId: "1:244380759529:web:c18ddad241fd7b8874c778",
  measurementId: "G-Q56HFTBFSX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;