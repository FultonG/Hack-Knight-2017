angular.module('DeviceService', []).factory('Device', ['$http', function($http) {

    return {
        add : function(device) {
            return $http.post('/addDevice', device);
        }
    }

}]);
