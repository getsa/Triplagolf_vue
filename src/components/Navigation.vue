<template>
  <nav v-show="user">
    <!-- <router-link v-show="!user" :to="{name: 'signin'}"> Sign in </router-link> -->
    <img id='logo' src='../assets/triplagolf.gif'>
    <span> Triplagolf 2020 </span>
    
  </nav>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>
<style scoped>

nav {
  text-align: center;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 50px;
  border-style: solid;
  border-width: 1px;
}

#logo {
  height: 50px;
}
</style>