<template>


<div class="">

<register v-if="!this.$root.access_token"></register>
<br>
<br>
<br>
<br>
<br>
<login v-if="!this.$root.access_token"></login>
<br>
<br>
<br>
<br>
<br>
<br>
<logout v-if="this.$root.access_token"></logout>
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
import logout from './components/auth/LogOut'


export default {
  name: 'App',
  components: { register, login, logout},
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
