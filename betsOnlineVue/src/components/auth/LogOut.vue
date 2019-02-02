<template>
  <div class="">


      <b-nav-form @submit.prevent="logOut" action="" method="post">
        <!-- <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input> -->
        <b-button variant="outline-light" class="my-2 my-sm-0" type="submit">LogOut</b-button>
      </b-nav-form>



  </div>
</template>

<script>
import {logout_helper} from "../../auth_js/logout_helper.js"
export default {
  data(){
    return  {

    }
  },
  methods: {
    logOut: function(e) {
        logout_helper.logout(e, this);
    },

  },


  mounted() {

  }
}
</script>
