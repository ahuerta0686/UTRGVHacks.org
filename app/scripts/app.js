'use strict';

/**
 * @ngdoc overview
 * @name ham15App
 * @description
 * # ham15App
 *
 * Main module of the application.
 */
angular
  .module('ham15App', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
		
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		});
  });
