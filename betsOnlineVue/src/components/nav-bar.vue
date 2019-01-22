<template>
  <div class="">
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">

      <img src="../assets/logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <!-- <a class="navbar-item">
        Home
      </a> -->

      <router-link class='navbar-item' :to="{ name: 'Home' }">Home</router-link>


      <!-- <a class="navbar-item">
        Apuestas
      </a> -->
      <router-link class='navbar-item' :to="{ name: 'Apuestas' }">Apuestas</router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Mas
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Tu Cuenta
          </a>
          <a class="navbar-item">
            Faq
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">


            <!-- <login v-if="!this.$root.access_token"></login> -->
            <!-- <register v-if="!this.$root.access_token"></register> -->
            <!-- <logout v-if="this.$root.access_token"></logout> -->

        </div>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import login from './auth/LogIn'
import logout from './auth/LogOut'
import register from './auth/Register'

export default {
  name: 'navbar',
  components: { login, logout, register},
  data () {
    return {

    }
  }
}
</script>







<style lang="scss">

</style>
