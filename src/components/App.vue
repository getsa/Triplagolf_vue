<template >
  <div id="app" class='body-class' >
    <navigation></navigation>
    <router-view/>
    <login-button/>
    <footer-menu/>
  </div>
</template>
    


<script>
import Navigation from './Navigation'
import LoginButton from './LoginButton'
import FooterMenu from './FooterMenu'

export default {
  components:{
    Navigation,
    LoginButton,
    FooterMenu
  }
}
</script>

<style>
.body-class {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../assets/background_blur.jpg');
  width: 100%;
  height: 100%;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
