angular.module('DashboardCtrl', []).controller('DashboardController', function($scope, Device) {

  $scope.addDevice = function(){
      Device.add($scope.device);
    }

});
