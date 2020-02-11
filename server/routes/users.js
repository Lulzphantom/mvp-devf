const express = require('express');
const router = express.Router();

const firebase = require("firebase");
var firebaseConfig = {
    apiKey: "AIzaSyCP5OFsuVBKag0WsWBf2i5bSDq9Yk2qOv8",
    authDomain: "proyecto-final-devf.firebaseapp.com",
    databaseURL: "https://proyecto-final-devf.firebaseio.com",
    projectId: "proyecto-final-devf",
    storageBucket: "proyecto-final-devf.appspot.com",
    messagingSenderId: "463336001050",
    appId: "1:463336001050:web:9a1a9ed335992342d48ba3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


router.get('/', (req, res) => {
    res.status(200).send('Server Arriba (👍)');
})


// Create
router.post('/createUser', (req, res) => {
    // console.log(req.body);
    const { email, password, username } = req.body;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // console.log(data); // Responde con el usuario 
            firebase.auth().currentUser.updateProfile({
                displayName: username
            })
                .then( () => {
                    console.log('ok ok'); // note corregir mejor esto :D
                })
                .catch( (error) => {
                    console.log(error);
                })
            
            res.status(201).send(user) // 201 created
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.code);
            console.log(error.message);
            // ...
            res.status(409).send(error) // 409 conflict
        });
});

// Sign In
router.post('/signInUser', (req, res) => {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then( data => {
            console.log('Sign In');
            res.status(202).send(data) // 202 accepted
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage);
            res.status(401).send(error) // 401 Unauthorized
        });
});

// Sign Out
router.get('/signOut', (req, res) => {
    firebase.auth().signOut()
        .then((data) => {
            // Sign-out successful.
            console.log('SignOut');
            res.status(200).send('SignOut'); // 200 ok
        }).catch((error) => {
            // An error happened.
            console.log(error);
            res.status(406).send(error); // 406 not accepted
        });
});

module.exports = router;