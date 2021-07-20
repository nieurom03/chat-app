import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZ7KIZjuSaao6ePBUH1xtlnB53jUhfnug",
    authDomain: "chat-app-project-608d7.firebaseapp.com",
    databaseURL: "https://chat-app-project-608d7-default-rtdb.firebaseio.com",
    projectId: "chat-app-project-608d7",
    storageBucket: "chat-app-project-608d7.appspot.com",
    messagingSenderId: "364900740723",
    appId: "1:364900740723:web:47ffee04f41eeaa88d0406",
    measurementId: "G-71BXMEESMJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
