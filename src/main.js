import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'

import App from './components/App.vue'
import router from './router.js'
import store from './store.js'
import FirebaseAuthPlugin from './FirebaseAuthPlugin'

import './../node_modules/jquery/dist/jquery.min.js'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'


//import "w3.css"
// import "./styles/styles.css"
// import "styles/grids.css"
// import "https://unpkg.com/bootstrap-table@1.14.2/dist/bootstrap-table.min.css"
// //<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(FirebaseAuthPlugin)

sync(store, router)



// firebase.auth().onAuthStateChanged(function(user) {
//   store.dispatch("fetchUser", user);
// });



const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app')






