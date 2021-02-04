import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANqxPpYAaxLnp9zq2QoiZ2f5q6NkF1FTI",
    authDomain: "shit-poster.firebaseapp.com",
    projectId: "shit-poster",
    storageBucket: "shit-poster.appspot.com",
    messagingSenderId: "948897224030",
    appId: "1:948897224030:web:a105fce63c97cd17c56bcf"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage()

export { firestore, storage };
export default firebase;