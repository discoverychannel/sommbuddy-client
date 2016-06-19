app.service('LoginService', function($q, $http) {
  var status = false;
  return {
    loginUser: function(name, pw) {

      return $http.post('http://localhost:3000/' + name, {pw: pw}).then(function(data){
        return data.data;
      })
    },
    checkStatus : function(){
      return status;
    },


  }
})
