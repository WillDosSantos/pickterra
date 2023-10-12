import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage'; // if you are using storage
import 'firebase/firestore'; // if you are using Cloud Firestore

// For Firebase JS SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyD3ieZMefDQ0SMbThjbkw6CVhOj6q99WMU",

    authDomain: "pickterra-f60c8.firebaseapp.com",
  
    projectId: "pickterra-f60c8",
  
    storageBucket: "pickterra-f60c8.appspot.com",
  
    messagingSenderId: "235776334997",
  
    appId: "1:235776334997:web:c179ac2bd82962b46d4f9c",
  
    measurementId: "G-KMKX2CLLYL"
  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firestore;
export const firebaseInstance = firebase;
export const onAuthStateChanged = firebase.auth().onAuthStateChanged;
export const addDoc = firebase.firestore.addDoc;
export const getDoc = firebase.firestore.getDoc;
export const collection = firebase.firestore.collection;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const ref = firebase.storage().ref;
export const uploadBytesResumable = firebase.storage().uploadBytesResumable;
export const getDownloadURL = firebase.storage().getDownloadURL;
