angular
  .module('sommbuddy').controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
    $scope.vm = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).then(function(data) {
            $state.go('main');
            if ($scope.data.password && $scope.data.username){
              $scope.vm.loggedIn = true;
            }
            $scope.data = {};
        })

        // .error(function(data) {
        //     var alertPopup = $ionicPopup.alert({
        //         title: 'Login Failed',
        //         template: 'Your username or password is incorrect.'
        //     });
        // });
    }
})
