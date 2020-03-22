<template>
  <div class="col1">
    <h1>Triplagolf app</h1>
    <h3> Logged out </h3>
  </div>
</template>


<script>
  export default {
  async mounted () {
    await this.$auth.logout()
    this.$router.replace({name: 'home'})
  }
}
</script>

<style scoped>

</style>









