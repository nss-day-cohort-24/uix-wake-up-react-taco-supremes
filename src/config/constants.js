import Rebase from 're-base'
import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCGYRGiBiI2ABl1DoMwHOlG4lZ--w7iBq8",
    authDomain: "taco-supremes.firebaseapp.com",
    databaseURL: "https://taco-supremes.firebaseio.com",
    
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default base;