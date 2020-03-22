import store from './store'
import Firebase from 'firebase'

// firebase init goes here
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
    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return await auth.signInWithEmailAndPassword(username, pass)
      },
      logout: async () => {
        await auth.signOut()
      }
    }
    auth.onAuthStateChanged(user => {
      store.commit('updateUser',{ user })
    })
  }
}