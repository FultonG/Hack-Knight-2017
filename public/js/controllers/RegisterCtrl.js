angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, SignIn) {

  $scope.submit = function(){
      console.log(SignIn.Register($scope.user));
    }

});
