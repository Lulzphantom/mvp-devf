const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyCP5OFsuVBKag0WsWBf2i5bSDq9Yk2qOv8",
    authDomain: "proyecto-final-devf.firebaseapp.com",
    databaseURL: "https://proyecto-final-devf.firebaseio.com",
    projectId: "proyecto-final-devf",
    storageBucket: "proyecto-final-devf.appspot.com",
    messagingSenderId: "463336001050",
    appId: "1:463336001050:web:9a1a9ed335992342d48ba3"
};
firebase.initializeApp( firebaseConfig ); // Initialize Firebase

module.exports = firebase;