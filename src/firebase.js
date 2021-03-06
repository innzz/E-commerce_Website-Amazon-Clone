import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCI9JkpfQDdCkge_LuMZQvEEbLoqw8YGkc",
    authDomain: "clone-228d2.firebaseapp.com",
    projectId: "clone-228d2",
    storageBucket: "clone-228d2.appspot.com",
    messagingSenderId: "520391765790",
    appId: "1:520391765790:web:f9ff948ef2c696a058e30f",
    measurementId: "G-GHZS58PV2R"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 