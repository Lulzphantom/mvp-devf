import firebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';


firebase.initializeApp( firebaseConfig ); // Initialize Firebase

export default class AuthApi{
    // Create new user
    createUser = (displayName, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            firebase.auth().currentUser.updateProfile({
                displayName: displayName
            })
                .then( () => {
                    return {ok: true, message: user}
                })
                .catch( (error) => {
                    return {ok: false, message: error.message}
                })
        })
        .catch((error) => {
            return {ok: false, message: error.message}
        });
    }

    // sign in user
    signInUser = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( data => {
                
            })
            .catch((error) => {
                // Handle Errors here.
                
            });
    }
}