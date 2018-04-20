import Rebase from 're-base'
import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCGYRGiBiI2ABl1DoMwHOlG4lZ--w7iBq8",
    authDomain: "taco-supremes.firebaseapp.com",
    databaseURL: "https://taco-supremes.firebaseio.com",
    
}

const app = firebase.initializeApp(config)


export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();