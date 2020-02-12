const express = require('express');
const router = express.Router();
const firebase = require('../midlewares/firebase');
const db = firebase.firestore();


router.get('/', (req, res) => {
    res.status(200).send('links up')
});

// Create
router.post('/createLink', (req, res) => {
    const { title, description, url, type, icon, iconColor } = req.body;
    const uid = firebase.auth().currentUser.uid;
    db.collection("users").doc(uid).collection('links').add({
        title,
        description: description,
        url: url,
        type: type,
        icon: icon,
        iconColor: iconColor
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            res.status(201).send(docRef.id); // 201 created preguntar que mandar aquí
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            res.status(409).send(error); // 409 conflict
        });
})

// Read
router.get('/getLinks', (req, res) => {
    let links = [];
    const uid = firebase.auth().currentUser.uid;
    db.collection("users").doc(uid).collection('links').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id}:`);
                // console.log(doc.data());
                links.push(doc.data());
            });
            res.status(200).send(links);
        })
        .catch( error => {
            res.status(404).send(error);
        });
});

// Update
// completamente el registro
router.put('/updateLinkById', (req, res) => {
    const { id } = req.query;
    const { title, description, url, type, icon, iconColor } = req.body;
    const uid = firebase.auth().currentUser.uid;
    if (Object.keys(req.body).length === 6) {
        let linkRef = db.collection("users").doc(uid).collection('links').doc(id)
        linkRef.update({
            title,
            description,
            url,
            type,
            icon,
            iconColor
        })
            .then( data => {
                res.status(202).send(id);
            })
            .catch( err => {
                res.status(304).send(err) // not modified
            });
    } else {
        res.status(400).send("Método Incorrecto, intenta utlizar PATCH");
    }
    console.log(Object.keys(req.body).length);
});

// Delete
router.delete('/deleteLinkById', (req, res) => {
    const { id } = req.query;
    const uid = firebase.auth().currentUser.uid;
    let linkRef = db.collection("users").doc(uid).collection('links').doc(id);

    linkRef.delete()
        .then( () => {
            res.status(204).send()
        })
        .catch(err => {
            res.status(404).send(err)
        });
});

module.exports = router;