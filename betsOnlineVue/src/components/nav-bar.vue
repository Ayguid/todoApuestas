<template>
  <div>

  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ name: 'Home' }">Te APPuesto</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav v-if="!$root.access_token">
        <b-nav-item :to="{ name: 'Register' }">Register</b-nav-item>
        <b-nav-item :to="{ name: 'Login' }">Login</b-nav-item>
        <!-- <router-link class='block' :to="{ name: 'Register' }">Register</router-link> -->
        <!-- <router-link class='block' :to="{ name: 'Login' }">Login</router-link> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown v-if="$root.user_data" right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>{{$root.user_data.fname}}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>


        </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

        <logout class="right" v-if="$root.access_token"></logout>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>


</div>
</template>
<style media="screen">
  .white{
    color:white;
  }
  .block{
    display: block;
  }
  .right{

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
