angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
      //tells the app to use the home view as a template
        templateUrl: 'views/login.html',
        controller: 'MainController'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController'
    });

$locationProvider.html5Mode(true);

}]);
