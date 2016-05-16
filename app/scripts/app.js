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
    .config(function($routeProvider) {
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

        .when('/setupCart', {
            templateUrl: 'views/setupCart.html',
            controller: 'setupCartCtrl',
            controllerAs: 'setupCart'

        })


        .when('/uploadCart', {
                templateUrl: 'views/uploadCart.html',
                controller: 'uploadCartCtrl',
                controllerAs: 'uploadCart'

            })
            .otherwise({
                redirectTo: '/'
            });
    });
