<template>
  <div class="">











    <form class="" @submit.prevent="login" action="" method="post">


      <div class="form-group">
        <input type="email" class="form-control" name="email"  placeholder="Email" ><br>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" name="password"  placeholder="password" v-model="password"><br>
      </div>

      <div class="form-group">
        <label class="form-check-label" for="remember_me">Remember Me</label>
        <input id="remember_me" type="checkbox" class="form-control" name="remember_me"><br>
      </div>

      <div class="form-group">
        <input type="submit" class="form-control" name="Submit" value="Submit">
      </div>


    </form>












  </div>
</template>

<script>

export default {
  name:'login',
  data(){
    return  {
      email:'',
      password:'',
    }
  },
  methods: {

    login: function(e) {
      var currentObj = this;
      const config = {
        headers: {
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      var formData = new FormData(e.target);
      axios.post('api/login', formData, config)
      .then(function (response) {
        if (response.status == "201" || response.status == "200") {
          console.log(response);
          currentObj.$root.access_token = response.data.access_token;
          localStorage.setItem('access_token', response.data.access_token);
          e.target.reset();
        }

      })
      .catch(function (error) {
        currentObj.output = error;
        alert(error);
      });
    },


  },


  mounted() {
    // console.log('Component mounted.')
  }
}
</script>
