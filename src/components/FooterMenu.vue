<template>
  <div id="footer" v-show="user"> 

    <div id="menu" class="btn-group">
      <b-button squared variant="light" size="mg" >Triplagolf</b-button>
      <b-button squared variant="light" size="mg" >Oma peli</b-button>
      <b-button squared variant="light" size="mg" >Asetukset</b-button>
      <b-button squared variant="light" size="mg" >Profiili</b-button>
    </div>
    <!-- <b-button squared variant="outline-secondary"> Warning </b-button> -->
    <!-- <router-link  v-show="user" :to="{name: 'signout'}"> Sign out </router-link> -->
  </div>
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

#footer {
  text-align: center;
  position: fixed; 

  width: 100%;
  height: 50px;
  bottom: 0px;
  display: block;
}

.btn-group{
  width:100%;
  
}
#menu {
  position: fixed; 
  bottom: 0px;
  left: 0px;
  padding-bottom: 10px;
}
</style>