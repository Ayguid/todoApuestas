<template>
  <div class="">






      <b-nav-form @submit.prevent="logOut" action="" method="post">
        <!-- <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input> -->
        <b-button variant="outline-light" class="my-2 my-sm-0" type="submit">LogOut</b-button>
      </b-nav-form>








  </div>
</template>

<script>
export default {


  data(){
    return  {

    }
  },
  methods: {
    logOut: function(e) {
      var currentObj = this;
      axios({
        method: 'post', //you can set what request you want to be
        url: '/api/logout',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + this.$root.access_token
        }
      })
      .then(function (response) {
        if (response.status == "201" || response.status == "200") {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user_data');
          currentObj.$root.access_token= null;
          currentObj.$root.user_data= null;
          console.log(response);
        }
      })
      .catch(function (error) {
        alert(error);
      });
    },


  },


  mounted() {
console.log(this.$root.access_token);

  }
}
</script>
