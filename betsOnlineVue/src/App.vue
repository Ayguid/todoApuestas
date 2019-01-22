t<template>
<div class="">
<register v-if="!this.$root.access_token"></register><br>
<br>
<login v-if="!this.$root.access_token"></login>

  <!-- <div class="container">
    <navbar></navbar>
  </div> -->


    <!-- <img src="./assets/tits.gif"> -->
    <!-- <router-view/> -->











  </div>
</template>

<script>
import register from './components/auth/Register'
import login from './components/auth/LogIn'


export default {
  name: 'App',
  components: { register, login},
}
</script>

<style>




#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
