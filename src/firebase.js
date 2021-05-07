import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcFFL6liOlpHalLT0Eba9_MWXuFMAZO7U',
  authDomain: 'digicare-290ed.firebaseapp.com',
  projectId: 'digicare-290ed',
  storageBucket: 'digicare-290ed.appspot.com',
  messagingSenderId: '473395276121',
  appId: '1:473395276121:web:93f21f7a196836a0a44448',
  measurementId: 'G-4RH3NW8FW3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
