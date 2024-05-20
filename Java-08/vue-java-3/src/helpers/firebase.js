import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAky6W0PS1Z_dsx_2J-uTKgcTew0bdH_2E",
    authDomain: "learning-resources-gr2.firebaseapp.com",
    databaseURL: "https://learning-resources-gr2-default-rtdb.firebaseio.com",
    projectId: "learning-resources-gr2",
    storageBucket: "learning-resources-gr2.appspot.com",
    messagingSenderId: "457215409288",
    appId: "1:457215409288:web:86144df05da7af8420333d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}