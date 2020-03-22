<template>
  <div id="login">
    <section>
      <div class="col2">
        <img  @click="loginFun" v-if="!user" src="..\assets\btn_google_signin_dark_normal_web.png">
        <!-- <button @click="loginFun" v-show="!user" > Google Login button here </button> -->
      </div>
    </section>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import store from '../store.js'
export default {
  computed: {
    ...mapGetters(['user']),
    nextRoute () {
      console.log('NextRoute');
      return this.$route.query.redirect || '/'
    }
  },
  data () {
    return {
      login: '',
      password: ''
    }
  },
  watch: {
    user (auth) {
      if(!auth){
        this.$router.replace(this.nextRoute)
      }
    }
  },
  destroyed: ()=>{
    console.log('LoginButton destroyd');
    
  },
  methods: {
    async loginFun () {
      //const auth = await this.$auth.login(this.login, this.password)
      console.log('loginFun()')
      const auth = await this.$auth.redirect()
    }
  }
}
</script>

<style scoped>
#login {
  margin-top: 60px;
  /* background-image: url('assets/background_blur.jpg');  */
}
</style>









