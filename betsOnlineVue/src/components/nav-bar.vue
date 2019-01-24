<template>
  <div>
  <b-navbar type="dark" variant="primary" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href=""><router-link class="white" :to="{ name: 'Home' }">Te Apuesto</router-link></b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown v-if="!this.$root.access_token" text="Do it" right>
          <b-dropdown-item href=""><router-link class=' ' :to="{ name: 'Register' }">Register</router-link></b-dropdown-item>
          <b-dropdown-item href=""><router-link class='' :to="{ name: 'Login' }">Login</router-link></b-dropdown-item>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    <logout v-if="this.$root.access_token"></logout>
  </b-navbar>
</div>
</template>
<style media="screen">
  .white{
    color:white;
  }
</style>
<script>
import logout from './auth/LogOut'

export default {

  name: 'navbar',
  components: { logout },
  data () {
    return {

    }
  }
}
</script>
