<template>
  <nav v-show="user">
    <router-link v-show="user" :to="{name: 'home'}"> Home </router-link>
    <router-link  :to="{name: 'profile'}"> Profile </router-link>
    <!-- <router-link v-show="!user" :to="{name: 'signin'}"> Sign in </router-link> -->
    <router-link  v-show="user" :to="{name: 'signout'}"> Sign out </router-link>

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
  border: 1px solid red;
}
</style>