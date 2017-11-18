angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, SignIn) {

  $scope.submit = function(){
      SignIn.Register($scope.user).then(function(data){
        $window.location.href = data.data.redirect;
      });
    }

});
