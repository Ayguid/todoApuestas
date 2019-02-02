
export const login_helper = {


  logIn: function(e, currentObj) {
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
        currentObj.$root.user_data = response.data;
        localStorage.setItem('user_data', JSON.stringify(response.data));
        currentObj.$router.push('/')
        e.target.reset();
      })
      .catch(function (error) {
        currentObj.output = error;
        alert(error);
      });
  },




};
