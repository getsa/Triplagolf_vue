<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Triplagolf app</h1>
      </div>
      <div class="col2">
        <button @click="loginFun"> Log In </button>
      </div>
    </section>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['user']),
    nextRoute () {
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
  methods: {
    async loginFun () {
      const auth = await this.$auth.login(this.login, this.password)
    }
  }
}
</script>

<style scoped>
/*body {
        /* background-image: url('assets/background_blur.jpg'); 
    }*/
</style>









