import store from './store'
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyAEaRb-PxgqlQKR3w94m60SahLZW8Y5CUo",
    authDomain: "triplagolf.web.app",
    databaseURL: "https://triplagolf.firebaseio.com",
    projectId: "triplagolf",
    storageBucket: "triplagolf.appspot.com",
    messagingSenderId: "480785382183"
};

export default {
  install: (Vue, options) => {
    const firebase = Firebase.initializeApp(config)
    const auth = firebase.auth()
    let provider = new Firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return await auth.signInWithEmailAndPassword(username, pass)
      },
      redirect: async () => {
        await auth.signInWithRedirect(provider);     
      },
      logout: async () => {
        await auth.signOut()
      }
    }
    auth.onAuthStateChanged(user => {
      if (auth.currentUser) {
        console.log('User logged in with email:');
        console.log(auth.currentUser.email);
      }
      else {
        console.log("user is logged out");
      }
      store.commit('updateUser',{ user })
      
    })
  }
}