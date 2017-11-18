angular.module('MainCtrl', []).controller('MainController', function($scope, SignIn, $window) {

  $scope.submit = function(){
      SignIn.SignIn($scope.user).then(function(data){
        $window.location.href = data.data.redirect;
      });
    }

});
