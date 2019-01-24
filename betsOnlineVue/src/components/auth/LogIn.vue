<template>
  <div class="">











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

export default {
  name:'Login',
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
        }
      }
      var formData = new FormData(e.target);
      axios.post('/api/login', formData, config)
      .then(function (response) {
        if (response.status == "201" || response.status == "200") {
          currentObj.$root.access_token = response.data.access_token;
          localStorage.setItem('access_token', response.data.access_token);
          const configUser = {
            headers: {
              'content-type': 'application/json',
              'Authorization': 'Bearer '+response.data.access_token,
            }
          }
          return  axios.get('/api/user', configUser);
        }
      })
      .then((response) => {
        currentObj.$root.user_data= response.data;
        localStorage.setItem('user_data', JSON.stringify(response.data));
        console.log(response.data);
        currentObj.$router.push('/')
        e.target.reset();
      })
      .catch(function (error) {
        currentObj.output = error;
        alert(error);
      });
    },
    askForUserData: function(token){
      var currentObj = this;
      const config = {
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer '+token,
        }
      }
      axios.get('/api/user', config)
      .then(function (response) {
        if (response.status == "201" || response.status == "200") {
          // console.log(response.data);
          return response.data;
        }
      })
      .catch(function (error) {
        currentObj.output = error;
        alert(error);
      });
    },


  },


  mounted() {
    // console.log(this.$router.go())
  }
}
</script>
