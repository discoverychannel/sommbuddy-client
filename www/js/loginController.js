angular
  .module('sommbuddy')
  .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(LoginService, $ionicPopup, $state, $timeout) {
    var vm = this;

    vm.login = function() {
      vm.wrongPass = false;
      vm.register = false;
      LoginService
        .loginUser(vm.username, vm.password)
        .then(function(data) {
          console.log(data);
          if(data === 'match!'){
            LoginService.loggedIn(true);
            vm.wrongPass = false;
            vm.register = false;
            $state.go('main');
          } else if (data === 'wrong password') {
            vm.register = false;
            vm.wrongPass = true;
            $timeout(function(){
              vm.wrongPass = false;
            }, 5000);
          } else if (data === 'user not found') {
            vm.wrongPass = false;
            vm.register = true;
          }
      })
    }
    vm.registerButton = function() {
      vm.wrongPass = false;
      vm.register = false;
      vm.username = '';
      vm.password = '';
      $state.go('register');
    }
}
