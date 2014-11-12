'use strict';

/**
 * @ngdoc overview
 * @name humanSynthApp
 * @description
 * # humanSynthApp
 *
 * Main module of the application.
 */
angular
  .module('humanSynthApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
<<<<<<< HEAD
    'ng-contentful'
=======
    'ng-contentful',
    'duScroll'
>>>>>>> gh-pages
  ])
  .config(function ($routeProvider, contentfulClientProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    contentfulClientProvider.setSpaceId('4xlwm16911zp');
    contentfulClientProvider.setAccessToken('6fe66430d43042a7c28777422e4ae6f8edf5f58bf05d46a072e92a83bf432dab');
  
  });
