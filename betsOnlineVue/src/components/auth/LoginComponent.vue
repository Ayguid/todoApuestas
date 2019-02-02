<template>
  <div class="">


<h2>Log In</h2>


    <form class="" @submit.prevent="login" action="" method="post">


      <div class="form-group">
        <!-- solo anda si se pone username en el name en vez de email -->
        <input type="email" class="form-control" name="username"  placeholder="Email" ><br>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" name="password"  placeholder="password" v-model="password"><br>
      </div>

      <!-- <div class="form-group">
      <label class="form-check-label" for="remember_me">Remember Me</label>
      <input id="remember_me" type="checkbox" class="form-control" name="remember_me"><br>
    </div> -->

    <div class="form-group">
      <input type="submit" class="form-control" name="Submit" value="Submit">
    </div>

  </form>



</div>
</template>

<script>
import {login_helper} from "../../auth_js/login_helper.js"
export default {
  name:'Login',
  data(){
    return  {
      email:'',
      password:'',
    }
  },
  methods: {
    login: function(e){
      login_helper.logIn(e, this);
    },

  },
  mounted() {

  }
}
</script>
