import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAcQUzxb25cURYhZd8DqeC4P4ayzoUcT-w",
    authDomain: "react-clone-47abf.firebaseapp.com",
    projectId: "react-clone-47abf",
    storageBucket: "react-clone-47abf.appspot.com",
    messagingSenderId: "925165808470",
    appId: "1:925165808470:web:e91e9990753233a1e844f7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;