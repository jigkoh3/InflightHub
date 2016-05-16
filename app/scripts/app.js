'use strict';

/**
 * @ngdoc overview
 * @name inflightHubApp
 * @description
 * # inflightHubApp
 *
 * Main module of the application.
 */
angular
  .module('inflightHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
<<<<<<< HEAD
      .when('/setupCart', {
        templateUrl: 'views/setupCart.html',
        controller: 'setupCartCtrl',
        controllerAs: 'setupCart'
=======
      .when('/uploadCart', {
        templateUrl: 'views/uploadCart.html',
        controller: 'uploadCartCtrl',
        controllerAs: 'uploadCart'
>>>>>>> 1ce7b7f29f109ebda60d85433472038843ee64c3
      })
      .otherwise({
        redirectTo: '/'
      });
  });
