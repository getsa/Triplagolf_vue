import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
let config = {
    apiKey: "AIzaSyAEaRb-PxgqlQKR3w94m60SahLZW8Y5CUo",
    authDomain: "triplagolf.web.app",
    databaseURL: "https://triplagolf.firebaseio.com",
    projectId: "triplagolf",
    storageBucket: "triplagolf.appspot.com",
    messagingSenderId: "480785382183"
};

firebase.initializeApp(config)

// firebase utils
const auth = firebase.auth()
const currentUser = auth.currentUser
const firestore = firebase.firestore();
let user
console.log(auth)



// firebase collections
//cloud REFS:
let collectionRefGames = firestore.collection("games");
let collectionRefPlayers = firestore.collection("players");
let collectionRefSports = firestore.collection("sports");
let collectionRefLogins = firestore.collection("logins");
let collectionRefInfoDocs = firestore.collection("InfoDocs");
let collectionRefUsers = firestore.collection("Users");




export {
    firestore,
    auth,
    currentUser,
    user,
    collectionRefGames,
    collectionRefPlayers,
    collectionRefSports,
    collectionRefLogins,
    collectionRefInfoDocs,
    collectionRefUsers
}
