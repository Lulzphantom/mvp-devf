const express = require('express');
const router = express.Router(); // enrutador
const firebase = require('../midlewares/firebase');
const db = firebase.firestore();


router.get('/', (req, res) => {
    res.status(200).send({message: "Server Up"});
});

// Create
router.post('/createLink', (req, res) => {
    // const { title, description, url, type, icon, iconColor } = req.body;
    // const uid = firebase.auth().currentUser.uid;
    const { uid } = req.query;
    const newLink = { ...req.body };
    db.collection( "users" ).doc( uid ).collection( "links" ).add( newLink )
        .then( ( docRef ) => {
            console.log("Document written with ID: ", docRef.id);
            res.status(201).send(docRef.id); // 201 created
        })
        .catch( ( error ) => {
            console.error("Error adding document: ", error);
            res.status(409).send(error); // 409 conflict
        });
})

// Read
router.get('/getLinks', (req, res) => {
    // const uid = firebase.auth().currentUser.uid;
    const { uid } = req.query;
    let links = [];
    db.collection( "users" ).doc( uid ).collection( "links" ).get()
        .then((querySnapshot) => {
            querySnapshot.forEach( ( doc ) => {
                // console.log(`${doc.id}:`);
                // console.log(doc.data());
                links.push( doc.data() );
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
    // const { title, description, url, type, icon, iconColor } = req.body;
    // const uid = firebase.auth().currentUser.uid;
    const { id, uid } = req.query;
    const updatedLink = { ...req.body };
    if ( Object.keys(req.body).length === 6 ) {
        let linkRef = db.collection( "users" ).doc( uid ).collection( "links" ).doc( id );
        linkRef.update( updatedLink )
            .then( () => {
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

// parcialmente el registro (preguntar)
router.patch('/updateLinkById', (req, res) => {
    // const uid = firebase.auth().currentUser.uid;
    const { id, uid } = req.query;
    const { title, description, url, type, icon, iconColor } = req.body;
    if ( Object.keys(req.body).length < 6 && Object.keys(req.body).length  > 0 ) {
        let linkRef = db.collection( "users" ).doc( uid ).collection( "links" ).doc( id )
        linkRef.update({
            title,
            description,
            url,
            type,
            icon,
            iconColor
        })
            .then( () => {
                res.status(202).send(id);
            })
            .catch( err => {
                res.status(304).send(err) // not modified
            });
    } else {
        res.status(400).send("Método Incorrecto, intenta utlizar PUT");
    }
    console.log(Object.keys(req.body).length);
});

// Delete
router.delete('/deleteLinkById', (req, res) => {
    // const uid = firebase.auth().currentUser.uid;
    const { id, uid } = req.query;
    let linkRef = db.collection( "users" ).doc( uid ).collection( "links" ).doc( id );

    linkRef.delete()
        .then( () => {
            console.log("Document successfully deleted!");
            res.status(204).send({id: id, message: "deleted"})
        })
        .catch( err => {
            console.error("Error removing document: ", err);
            res.status(404).send(err)
        }); // note: parece ser que siempre lo borra aunque no exista :/
});

module.exports = router;