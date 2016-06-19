app.service('LoginService', function($q, $http) {
  var status = false;
  return {
      loginUser: function(name, pw) {
          var deferred = $q.defer();
          var promise = deferred.promise;
          console.log('this is inside the loginUser method');
          return $http.post('http://localhost:3000/' + name, {pw: pw}).then(function(data){
            if(data.data === 'match! show them their list') {
              //do this
              console.log('there is a match!');
            } else if (data.data === 'user found, wrong password') {
              //do this
              console.log('user found, wrong password');
            } else if (data.data === 'user is not in db, redirect to register') {
              //do this
              console.log('user is not in db!');
            }
          })
          if (name == 'user' && pw == 'pass') {
              deferred.resolve('Welcome ' + name + '!');
              status = true;
          } else {
              deferred.reject('Wrong credentials.');
          }
          promise.success = function(fn) {
              promise.then(fn);
              return promise;
          }
          promise.error = function(fn) {
              promise.then(null, fn);
              return promise;
          }
          return promise;
      },
      checkStatus : function(){
        return status;
      },


  }
})
