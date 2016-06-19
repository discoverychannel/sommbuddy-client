angular
  .module('sommbuddy')
  .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(LoginService, $ionicPopup, $state) {
    var vm = this;

    vm.login = function() {
        LoginService
          .loginUser(vm.username, vm.password)
          .then(function(data) {
            console.log(data);
            if(data === 'match!'){
              $state.go('main');
            }
        })
    }
}
