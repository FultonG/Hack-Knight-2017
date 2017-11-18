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
    })
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardController'
    });

$locationProvider.html5Mode(true);

}]);
