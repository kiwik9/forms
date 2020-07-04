import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAhYTkblc1GUe38EoupGi_qjJRHBJSc0E",
  authDomain: "forms-51603.firebaseapp.com",
  databaseURL: "https://forms-51603.firebaseio.com",
  projectId: "forms-51603",
  storageBucket: "forms-51603.appspot.com",
  messagingSenderId: "572637182384",
  appId: "1:572637182384:web:147a3491f52012e4d67e75",
  measurementId: "G-R4LY8MCH9H"
});

export const db = firebaseApp.firestore();
