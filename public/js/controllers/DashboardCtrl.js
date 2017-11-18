angular.module('DashboardCtrl', []).controller('DashboardController', function($scope) {

  $scope.submit = function(){
      console.log(SignIn.SignIn($scope.user));
    }

});
