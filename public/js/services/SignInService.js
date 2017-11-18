angular.module('SignInService', []).factory('SignIn', ['$http', function($http) {

    return {
        SignIn : function(user) {
            return $http.post('/login', user);
        },
        Register : function(user) {
          return $http.post('/addUser', user);
        }
    }

}]);
