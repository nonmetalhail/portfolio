'use strict';

describe('Portfolio controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('portfolioApp'));
  beforeEach(module('portfolioServices'));

//HELPER FUNCTIONS

  describe('array slicer function', function(){
    
    it('should slice a 1 length array into 1 by 2', function() {
      var arr = [1];
      var sliced = _arrSlicer(arr,2);
      expect(sliced.length).toBe(1);
    });
    
    it('should slice a 2 length array into 1 by 2', function() {
      var arr = [1,2];
      var sliced = _arrSlicer(arr,2);
      expect(sliced.length).toBe(1);
      expect(sliced[0][1]).toBe(2);
    });
    
    it('should slice a 3 length array into 2 by 2', function() {
      var arr = [1,2,3];
      var sliced = _arrSlicer(arr,2);
      expect(sliced.length).toBe(2);
      expect(sliced[1][0]).toBe(3);
    });

    it('should slice an array by 3', function() {
      var arr = [1,2,3,4];
      var sliced = _arrSlicer(arr,3);
      expect(sliced.length).toBe(2);
      expect(sliced[0][2]).toBe(3);
      expect(sliced[1][0]).toBe(4);
    });
  });

  describe('project text formatter', function(){
    
    it('should format p into html', function() {
      var arr = [{"p":"Para"},{"p":"Para para"}];
      var outHTML = _loadText(arr);
      expect(outHTML).toEqual('<p>Para</p><p>Para para</p>');
    });

    it('should format nested spans into html', function() {
      var arr = [{"p":[{"span":"Span"}]},{"p":"Para"}];
      var outHTML = _loadText(arr);
      expect(outHTML).toEqual('<p><span>Span</span></p><p>Para</p>');
    });

    it('should format lists into html', function() {
      var arr = [{"p":[{"span":"Text"},{"ul":[{"li":"One"},{"li":"Two"}]}]}];
      var outHTML = _loadText(arr);
      expect(outHTML).toEqual('<p><span>Text</span><ul><li>One</li><li>Two</li></ul></p>');
    });

    it('should format links into html', function() {
      var arr = [{"p":[{"span":"Left text "},{"a":{"src":"link/url","text":"Link Text"}},{"span":"Right Text"}]}];
      var outHTML = _loadText(arr);
      expect(outHTML).toEqual('<p><span>Left text </span><a href="link/url" target="_blank">Link Text</a><span>Right Text</span></p>');
    });
  });

  describe('link compiler', function(){
    
    it('should put one project into tangible', function() {
      var arr = [{
        "title":"Drinke: The Hydration Tracking Smartcup",
        "id":"drinke",
        "thumb":{
          "type":"tangible",
          "src":"smartcup/drinke_thumb.jpg",
          "alt":"Drinke",
          "title":"Drinke Smartcup"
        }
      }];
      var links = _linkCompiler(arr);
      expect(links).toEqual({
        "tangible": { "text":"Tangible Devices", "arr":[{ "id":"drinke", "title": "Drinke Smartcup"}]},
        "apps": { "text":"Apps", "arr":[] },
        "info_vis": { "text":"Info Vis", "arr":[] },
        "code": { "text":"Code Samples", "arr":[] }
      });
    });

    it('should put multiple projects into tangible', function() {
      var arr = [{
        "title":"Drinke: The Hydration Tracking Smartcup",
        "id":"drinke",
        "thumb":{
          "type":"tangible",
          "src":"smartcup/drinke_thumb.jpg",
          "alt":"Drinke",
          "title":"Drinke Smartcup"
        }
      },{
        "title":"Second Project Long Title",
        "id":"second",
        "thumb":{
          "type":"tangible",
          "src":"second/second.jpg",
          "alt":"Second",
          "title":"Second Project"
        }
      }];
      var links = _linkCompiler(arr);
      expect(links).toEqual({
        "tangible": { "text":"Tangible Devices", "arr":[{ "id":"drinke", "title": "Drinke Smartcup"},{ "id":"second", "title": "Second Project"}]},
        "apps": { "text":"Apps", "arr":[] },
        "info_vis": { "text":"Info Vis", "arr":[] },
        "code": { "text":"Code Samples", "arr":[] }
      });
    });

    it('should put a project into each', function() {
      var arr = [{
        "title":"Drinke: The Hydration Tracking Smartcup",
        "id":"drinke",
        "thumb":{
          "type":"tangible",
          "src":"smartcup/drinke_thumb.jpg",
          "alt":"Drinke",
          "title":"Drinke Smartcup"
        }
      },{
        "title":"Mapestry: A Suite of Tools for Collecting, Organizing, and Sharing Family Histories",
        "id":"mapestry",
        "thumb":{
          "type":"apps",
          "src":"mapestry/mapestry_thumb.png",
          "alt":"Mapestry",
          "title":"Mapestry"
        }
      },{
        "title":"Oregon Health Statistics Slopegraph",
        "id":"slopegraph",
        "thumb":{
          "type":"info_vis",
          "src":"slopegraph/slopegraph_thumb.jpg",
          "alt":"Slopegraph",
          "title":"Slopegraph"
        }
      },{
        "title":"Code Samples",
        "id":"codesam",
        "thumb":{
          "type":"code",
          "src":"code/codesam_thumb.jpg",
          "alt":"Code Samples",
          "title":"Code Samples"
        }
      }];
      var links = _linkCompiler(arr);
      expect(links).toEqual({
        "tangible": { "text":"Tangible Devices", "arr":[{ "id":"drinke", "title": "Drinke Smartcup"}]},
        "apps": { "text":"Apps", "arr":[{ "id":"mapestry", "title": "Mapestry"}] },
        "info_vis": { "text":"Info Vis", "arr":[{ "id":"slopegraph", "title": "Slopegraph"}] },
        "code": { "text":"Code Samples", "arr":[{ "id":"codesam", "title": "Code Samples"}] }
      });
    });
  });


// CONTROLLERS

  describe('base portfolio page', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/portfolio.json').
        respond([{
          "title":"Drinke: The Hydration Tracking Smartcup",
          "id":"drinke",
          "thumb":{
            "type":"tangible",
            "src":"smartcup/drinke_thumb.jpg",
            "alt":"Drinke",
            "title":"Drinke Smartcup"
          }
        },{
          "title":"Mapestry: A Suite of Tools for Collecting, Organizing, and Sharing Family Histories",
          "id":"mapestry",
          "thumb":{
            "type":"apps",
            "src":"mapestry/mapestry_thumb.png",
            "alt":"Mapestry",
            "title":"Mapestry"
          }
        }]);

      scope = $rootScope.$new();
      ctrl = $controller('ProjectListCtrl', {$scope: scope});
    }));


    it('should create project model with 2 projects fetched from xhr', function() {
      expect(scope.portfolio).toEqualData([]);
      $httpBackend.flush();

      expect(scope.portfolio.length).toBe(2);
      expect(scope.portfolio[1].id).toEqualData('mapestry');
    });


    it('should slice the array', function() {
      $httpBackend.flush();
      expect(scope.pf.length).toBe(1);
    });
  });

  describe('project page', function(){
    var scope, ctrl, $httpBackend, sce;
    var pid = 'mapestry';

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $sce) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/mapestry.json').
        respond({
        "id":"mapestry",
        "title":"Mapestry: A Suite of Tools for Collecting, Organizing, and Sharing Family Histories",
        "thumb":{"type":"apps","src":"","alt":"Mapestry","title":"Mapestry"},
        "date":"James R. Chen Award in Enhancing Information Systems, 2013",
        "keywords":"Javascript, jQuery, Leaflet.js, maps, mobile, user research",
        "class":"MIMS Final Project",
        "site":[{"title":"Mapestry Main Website","src":"http://www.mapestry.co/"},{"title":"Mapestry Prototype","src":"http://www.mapestry.co/mapestry.html"}],
        "team":[{"name":"Jennifer Wang","site":"http://dominantprimordialbeast.com/"},{"name":"Carinne Johnson"}],
        "text":[{"p":"blah"},{"p":"Blah blah"}],
        "images":[{"src":"mapestry/suite.png","caption":"The Suite of Tools"},{"src":"mapestry/mapestry.png","caption":"Mapestry Player App"}],
        "video":[{"src":"mapestry/Mapestry-HD","caption":"Mapestry Promotional Video"}]
      });

      scope = $rootScope.$new();
      sce = $sce;
      ctrl = $controller('ProjectDetailCtrl', {$scope: scope, $routeParams:{projectId: pid}});
    }));


    it('should create project model fetched from xhr', function() {
      expect(scope.project).toEqualData({});
      $httpBackend.flush();

      expect(scope.project).toEqualData({
        "id":"mapestry",
        "title":"Mapestry: A Suite of Tools for Collecting, Organizing, and Sharing Family Histories",
        "thumb":{"type":"apps","src":"","alt":"Mapestry","title":"Mapestry"},
        "date":"James R. Chen Award in Enhancing Information Systems, 2013",
        "keywords":"Javascript, jQuery, Leaflet.js, maps, mobile, user research",
        "class":"MIMS Final Project",
        "site":[{"title":"Mapestry Main Website","src":"http://www.mapestry.co/"},{"title":"Mapestry Prototype","src":"http://www.mapestry.co/mapestry.html"}],
        "team":[{"name":"Jennifer Wang","site":"http://dominantprimordialbeast.com/"},{"name":"Carinne Johnson"}],
        "text":[{"p":"blah"},{"p":"Blah blah"}],
        "images":[{"src":"mapestry/suite.png","caption":"The Suite of Tools"},{"src":"mapestry/mapestry.png","caption":"Mapestry Player App"}],
        "video":[{"src":"mapestry/Mapestry-HD","caption":"Mapestry Promotional Video"}]
      });
    });

    it('should create photo model fetched from xhr', function() {
      expect(scope.photos).toEqualData(undefined);
      $httpBackend.flush();

      expect(scope.photos).toEqualData([[{"src":"mapestry/suite.png","caption":"The Suite of Tools"},{"src":"mapestry/mapestry.png","caption":"Mapestry Player App"}]]);
    });

    it('should create video model fetched from xhr', function() {
      expect(scope.videos).toEqualData(undefined);
      $httpBackend.flush();

      expect(scope.videos).toEqualData([[{"src":"mapestry/Mapestry-HD","caption":"Mapestry Promotional Video"}]]);
    });

    it('should create text model fetched from xhr', function() {
      expect(scope.text).toEqualData(undefined);
      $httpBackend.flush();
      expect(typeof scope.text === 'object').toEqual(true);
      expect(sce.getTrusted(sce.HTML, scope.text)).toEqual('<p>blah</p><p>Blah blah</p>');
    });
  });
  
  describe('sidebar controller', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/portfolio.json').
        respond([{
          "title":"Drinke: The Hydration Tracking Smartcup",
          "id":"drinke",
          "thumb":{
            "type":"tangible",
            "src":"smartcup/drinke_thumb.jpg",
            "alt":"Drinke",
            "title":"Drinke Smartcup"
          }
        },{
          "title":"Mapestry: A Suite of Tools for Collecting, Organizing, and Sharing Family Histories",
          "id":"mapestry",
          "thumb":{
            "type":"apps",
            "src":"mapestry/mapestry_thumb.png",
            "alt":"Mapestry",
            "title":"Mapestry"
          }
        }]);

      scope = $rootScope.$new();
      ctrl = $controller('SidebarCtrl', {$scope: scope});
    }));


    it('should create project model with 2 projects fetched from xhr', function() {
      expect(scope.portfolio).toEqualData([]);
      $httpBackend.flush();

      expect(scope.portfolio.length).toBe(2);
      expect(scope.portfolio[1].id).toEqualData('mapestry');
    });


    it('should create the link model', function() {
      expect(scope.links).toEqualData(undefined);
      $httpBackend.flush();
      expect(scope.links).toEqualData({
        "tangible": { "text":"Tangible Devices", "arr":[{ "id":"drinke", "title": "Drinke Smartcup"}]},
        "apps": { "text":"Apps", "arr":[{ "id":"mapestry", "title": "Mapestry"}] },
        "info_vis": { "text":"Info Vis", "arr":[] },
        "code": { "text":"Code Samples", "arr":[] }
      });
    });
  });
});
