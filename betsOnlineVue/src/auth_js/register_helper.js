

export const register_helper = {


register: function(e, currentObj){
      // e.preventDefault();
      const config = {
        headers: {
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      var formData = new FormData(e.target);
      axios.post('/api/register', formData, config)
      .then(function (response) {
        if (response.status == "201") {
          alert(JSON.stringify(response.data));
          e.target.reset();
          currentObj.$router.push('/login');
        }
        if (response.data.errors) {
          alert(JSON.stringify(response.data.errors));
        }
      })
      .catch(function (error) {
        currentObj.output = error;
      });
        }





}
