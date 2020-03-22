<template >
  <div id="app" v-bind:class="{signout : 1}">
    <navigation></navigation>
    <router-view/>
    <login-button/>
  </div>
</template>

<script>
import Navigation from './Navigation'
import LoginButton from './LoginButton'
export default {
  components:{
    Navigation,
    LoginButton
  }
}
</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}
</style>
