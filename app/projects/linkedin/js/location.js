function philtr() {
  this.latitude='';
  this.longitude='';
  this.photos = [];

  this.getUserLocation = function(){ 
  var self=this;
  var deferred = $.Deferred();
  //check if the geolocation object is supported, if so get position
  if (navigator.geolocation){
    // navigator.geolocation.getCurrentPosition(function(position){_displayLocation(position,self,deferred.resolve);}, _displayError);
    navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject);
    return deferred.promise();
  }
  else
    document.getElementById("locationData").innerHTML = "Sorry - your browser doesn't support geolocation!";
  }

  this.getLatLong = function(position){
    var self = this;
    var deferred = $.Deferred();
    _displayLocation(position,self);
    deferred.resolve();
    return deferred.promise();
  }

  var _displayLocation = function(position,self) { 
  //build text string including co-ordinate data passed in parameter
  self.latitude = position.coords.latitude;
  self.longitude = position.coords.longitude;
  var displayText = "User latitude is " + self.latitude + " and longitude is " + self.longitude;

  //display the string for demonstration
  document.getElementById("locationData").innerHTML = displayText;
  }

  var _displayError = function(error) { 
  //get a reference to the HTML element for writing result
  var locationElement = document.getElementById("locationData");

  //find out which error we have, output message accordingly
  switch(error.code) {
  case error.PERMISSION_DENIED:
    locationElement.innerHTML = "Permission was denied";
    break;
  case error.POSITION_UNAVAILABLE:
    locationElement.innerHTML = "Location data not available";
    break;
  case error.TIMEOUT:
    locationElement.innerHTML = "Location request timeout";
    break;
  case error.UNKNOWN_ERROR:
    locationElement.innerHTML = "An unspecified error occurred";
    break;
  default:
    locationElement.innerHTML = "Who knows what happened...";
    break;
    }
  }

  this.callInstagram = function(){
    var d = $.Deferred();
    var self = this;
    var urlHead = 'https://api.instagram.com/v1/media/search?';
    var urlLoc = 'lat='+this.latitude+'&lng='+ this.longitude;
    var urlTail = '&client_id=c7367a799fe34e03829b0613a743fa92&callback=?';

    $.getJSON(encodeURI(urlHead+urlLoc+urlTail), function(resp){
      console.log(resp);
      self.photos = resp.data;
      // for(var i in resp.data){
      // var source = resp.data[i]['images']['thumbnail']['url'];
      // $('#photos').append('<img src="'+source+'"/>');
    // }
    }).done(function(p){
        d.resolve(p);
    }).fail(d.reject);

    return d.promise();
  }

  this.loadPhotos = function(){
    console.log(this.photos)
    for(var i in this.photos){
      var source = this.photos[i]['images']['thumbnail']['url'];
      $('#photos').append('<img src='+source+'/>');
    }
  }
};

var myPhiltr = new philtr();

function run(){
  $.when(myPhiltr.getUserLocation()).pipe(myPhiltr.getLatLong).then(myPhiltr.callInstagram);
  myPhiltr.loadPhotos;
}