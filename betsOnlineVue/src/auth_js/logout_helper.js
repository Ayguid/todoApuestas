

export const logout_helper = {

  // console.log('123');

logout: function(e, currentObj){
  axios({
    method: 'post', //you can set what request you want to be
    url: '/api/logout',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + currentObj.$root.access_token
    }
  })
  .then(function (response) {
    if (response.status == "201" || response.status == "200") {
      currentObj.$root.access_token= localStorage.removeItem('access_token');;
      currentObj.$root.user_data= localStorage.removeItem('user_data');
      console.log(response);
    }
  })
  .catch(function (error) {
    alert(error);
  });
}

}
