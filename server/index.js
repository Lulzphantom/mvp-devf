const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4200;
const users = require('./routes/users');
// const firebase = require("firebase");

const app = express();
app.use(bodyParser.json());

app.use('/', users);

// var firebaseConfig = {
//     apiKey: "AIzaSyCP5OFsuVBKag0WsWBf2i5bSDq9Yk2qOv8",
//     authDomain: "proyecto-final-devf.firebaseapp.com",
//     databaseURL: "https://proyecto-final-devf.firebaseio.com",
//     projectId: "proyecto-final-devf",
//     storageBucket: "proyecto-final-devf.appspot.com",
//     messagingSenderId: "463336001050",
//     appId: "1:463336001050:web:9a1a9ed335992342d48ba3"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})