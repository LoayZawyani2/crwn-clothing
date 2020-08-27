import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBL9tLicDS7gvbMlfKoJSI96NWYjFHhjtc",
  authDomain: "crwn-db-37430.firebaseapp.com",
  databaseURL: "https://crwn-db-37430.firebaseio.com",
  projectId: "crwn-db-37430",
  storageBucket: "crwn-db-37430.appspot.com",
  messagingSenderId: "483048498164",
  appId: "1:483048498164:web:3675feaaf52b84fe804fa1",
  measurementId: "G-EJYJFWX6FZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
