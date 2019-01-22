<template>
  <div class="">






    <form class="" @submit.prevent="logOut" action="" method="post">

      <div class="form-group">
        <input type="submit" class="form-control" name="Submit" value="LogOut">
      </div>

    </form>












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
          currentObj.$root.access_token= null;
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
