import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoBe3ndPXXuaY4IteZe4FIrWBE_OJF5qs",
    authDomain: "react-clone-messenger.firebaseapp.com",
    databaseURL: "https://react-clone-messenger.firebaseio.com",
    projectId: "react-clone-messenger",
    storageBucket: "react-clone-messenger.appspot.com",
    messagingSenderId: "612128985820",
    appId: "1:612128985820:web:83c98228c50d18563bda19"
});

const db = firebaseApp.firestore();

export default db;