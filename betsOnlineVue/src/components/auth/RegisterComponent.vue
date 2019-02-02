<template>
  <div class="">
    <h2>Register</h2>

    <form class="" @submit.prevent="formRegister" action="" method="post">

      <div class="form-group">
        <input type="text" class="form-control" name="fname" value=""placeholder="Nombre"><br>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" name="lname" value=""placeholder="Apellido"><br>
      </div>

      <div class="form-group">
        <input type="date" class="form-control" name="bday" value=""placeholder="Fecha de nacimiento"><br>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" name="email" value=""placeholder="Email"><br>
      </div>

      <div class="form-group">
        <input type="text" class="form-control" name="dni" value="" placeholder="dni"><br>
      </div>

      <div class="form-group">
        <input type="password" class="form-control" name="password" value=""placeholder="password"><br>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" name="password_confirmation" value=""placeholder="confirme password"><br>
      </div>
      <div class="form-group">
        <input type="submit" class="form-control" name="Submit" value="Submit">
      </div>


    </form>












  </div>
</template>

<script>
import {register_helper} from "../../auth_js/register_helper.js"
export default {
  data(){
    return  {

    }
  },
  methods: {
    formRegister: function(e) {
      register_helper.register(e, this);
    },


  },


  mounted() {
    // console.log('Component mounted.')
  }
}
</script>
