import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/compat/database'

let firebaseConfig = {
    apiKey: "AIzaSyCzRF9mcjia2bWrUDDcP62EHpO8X3XSy2Y",
    authDomain: "ticketcycle-8f0f1.firebaseapp.com",
    projectId: "ticketcycle-8f0f1",
    storageBucket: "ticketcycle-8f0f1.appspot.com",
    messagingSenderId: "966198748182",
    appId: "1:966198748182:web:ec62e5ffc416e01907c137",
    measurementId: "G-P3YQYDJ814"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;     