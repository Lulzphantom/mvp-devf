const express = require('express');
const router = express.Router(); // enrutador
const firebase = require('../midlewares/firebase');
const db = firebase.firestore();


router.get('/', (req, res) => {
    res.status(200).send({message: "Server Up"});
});

// Create
router.post('/createLink', (req, res) => {
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
    const { uid } = req.query;
    let links = [];
    db.collection( "users" ).doc( uid ).collection( "links" ).get()
        .then((querySnapshot) => {
            querySnapshot.forEach( ( doc ) => {
                let id = doc.id;
                let link = { id, ...doc.data() };
                links.push( link );
            });
            res.status(200).send(links);
        })
        .catch( error => {
            res.status(404).send(error);
        });
});

router.get('/getLinkById', (req, res) => {
    const { id, uid } = req.query;
    let link = {};
    let linkRef = db.collection( "users" ).doc( uid ).collection( "links" ).doc( id );
    let getDoc = linkRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
                res.status(404).send('No such document!');
            } else {
                let id = doc.id;
                link = { id, ...doc.data() };
                console.log('Document data:', link); 
                res.status(200).send( link );
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
            res.status(404).send(err);
        });
})

router.get('/getLinksByType', (req, res) => {
    const { uid, type } = req.query;
    let links = [];
    let linksRef = db.collection( "users" ).doc( uid ).collection( "links" );
    let query = linksRef.where('type', '==', type).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                res.status(404).send('No matching documents.');
                return;
            }

            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                let id = doc.id;
                let link = { id, ...doc.data() };
                links.push( link );
            });
            res.status(200).send(links);
        })
        .catch(err => {
            console.log('Error getting documents', err);
            res.status(404).send(err);
        });
})

// Update
// completamente el registro
router.put('/updateLinkById', (req, res) => {
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
    const { id, uid } = req.query;
    let linkRef = db.collection( "users" ).doc( uid ).collection( "links" ).doc( id );

    linkRef.delete()
        .then( () => {
            console.log("Document successfully deleted!");
            res.status(204).send( { id, message: "deleted" } )
        })
        .catch( err => {
            console.error("Error removing document: ", err);
            res.status(404).send(err)
        }); // note: parece ser que siempre lo borra aunque no exista :/
});

module.exports = router;