'use strict';

/* Services */

var portfolioServices = angular.module('portfolioServices', ['ngResource']);

portfolioServices.factory('Portfolio', ['$resource',
  function($resource){
    return $resource('data/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'portfolio'}, isArray:true}
    });
  }]);
