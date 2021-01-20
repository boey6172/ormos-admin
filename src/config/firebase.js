import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCl7gGiwwOPR8rNmJSQ09Vp0lUPrOVkI3Q",
  authDomain: "testing-49c7b.firebaseapp.com",
  databaseURL: "https://testing-49c7b.firebaseio.com",
  projectId: "testing-49c7b",
  storageBucket: "testing-49c7b.appspot.com",
  messagingSenderId: "610079685602",
  appId: "1:610079685602:web:3bbb6d28808951f52917bb",
  measurementId: "G-ZL0P2YX073"
}

const fire = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage,fire as default}