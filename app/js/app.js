'use strict';

/* App Module */

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',

  'portfolioControllers',

  'portfolioServices'
]);

portfolioApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider
      .when('', {
        controller: 'SidebarCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
        controller: 'ProjectListCtrl'
      })
      .when('/portfolio/:projectId', {
        templateUrl: 'templates/project.html',
        controller: 'ProjectDetailCtrl'
      })
      .when('/about', {
        templateUrl: 'templates/about.html'})
      .when('/cv', {
        templateUrl: 'templates/cv.html',
        controller: 'CVCtrl'
      })
      .otherwise({
        redirectTo: '/portfolio'
      });
    $locationProvider.html5Mode(true);
  }]);
