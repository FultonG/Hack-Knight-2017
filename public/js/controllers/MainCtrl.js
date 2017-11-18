angular.module('MainCtrl', []).controller('MainController', function($scope, SignIn) {

  $scope.submit = function(){
      console.log(SignIn.SignIn($scope.user));
    }

});
