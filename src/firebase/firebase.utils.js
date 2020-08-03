import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAwMdkPc6FF2KH_SuQ1xqQrxRZLXnd5F3Q',
  authDomain: 'crown-site-f9495.firebaseapp.com',
  databaseURL: 'https://crown-site-f9495.firebaseio.com',
  projectId: 'crown-site-f9495',
  storageBucket: 'crown-site-f9495.appspot.com',
  messagingSenderId: '204322554180',
  appId: '1:204322554180:web:3c7f2623ea941ca2211711',
  measurementId: 'G-HY9W8D1EYY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
