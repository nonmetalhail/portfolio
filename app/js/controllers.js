'use strict';

/* Controllers */

var portfolioControllers = angular.module('portfolioControllers', ['ngSanitize']);

portfolioControllers.controller('ProjectListCtrl', ['$scope', 'Portfolio',
  function($scope, Portfolio) {
    $scope.portfolio = Portfolio.query(function(portfolio){
      $scope.pf = _arrSlicer(portfolio,2);
    });
  }]);

portfolioControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$sce', 'Portfolio',
  function($scope, $routeParams, $sce, Portfolio) {
    $scope.project = Portfolio.get({ projectId: $routeParams.projectId },function(project){
      $scope.photos = _arrSlicer(project.images,2);
      $scope.videos = (project.video)? _arrSlicer(project.video,2) : [];
      $scope.text = $sce.trustAsHtml( _loadText(project.text) );
    });
  }]);

portfolioControllers.controller('CVCtrl', ['$scope', 'Portfolio',
  function($scope, Portfolio) {
    $scope.cv = Portfolio.query();
  }]);

portfolioControllers.controller('SidebarCtrl', ['$scope', '$location', 'Portfolio',
  function($scope, $location, Portfolio) {
    $scope.portfolio = Portfolio.query(function(portfolio){
      $scope.links = _linkCompiler(portfolio);
    });
    $scope.$on('$locationChangeStart', function(event) {
      console.log('change');
      $scope.isActive = $location.path().split('/').pop();
    });
 }]);

function _arrSlicer(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

function _loadText(textList) {
  var text = [];
  for(var i in textList){
    for(var key in textList[i]){
      (key=='a')?text.push('<a href="'+textList[i][key]['src']+'" target="_blank">'+textList[i][key]['text']+'</a>'):
        text.push('<'+key+'>'+((typeof textList[i][key] == 'object')?_loadText(textList[i][key]):
          textList[i][key])+'</'+key+'>')
    }
  }
  return text.join('')
}

function _linkCompiler(pArr){
  var d = {
    "tangible": { "text":"Tangible Devices", "arr":[] },
    "apps": { "text":"Apps", "arr":[] },
    "info_vis": { "text":"Info Vis", "arr":[] },
    "code": { "text":"Code Samples", "arr":[] }
  };
  for(var p in pArr.slice(0,pArr.length)){
    var index = pArr[p]["thumb"]["type"];
    d[index]['arr'].push( { "id":pArr[p]["id"], "title":pArr[p]["thumb"]["title"] } );
  };
  return d
}