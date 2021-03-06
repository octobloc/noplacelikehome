'use strict';

var apiBase = 'https://7385af0d.ngrok.com/';

/**
 * @ngdoc overview
 * @name nudgeWebAppApp
 * @description
 * # nudgeWebAppApp
 *
 * Main module of the application.
 */
angular
  .module('nudgeWebAppApp', [
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
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        /**controller: 'LoginCtrl'**/
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        /**controller: 'JoinCtrl'**/
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        //controller: 'AboutCtrl'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        //controller: 'AboutCtrl'
      })
      .when('/feed', {
        templateUrl: 'views/feed.html',
        //controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        /*controller: 'AboutCtrl'*/
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        /*controller: 'AboutCtrl'*/
      })
      .otherwise({
        redirectTo: '/'
      });
  });
