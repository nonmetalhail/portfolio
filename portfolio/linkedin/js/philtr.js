var coords = {
  lat :'',
  lon : ''
}
var photos = [];

$(document).ready(function(){
  $('#filtr').on('click', function() {
      $.Deferred(getUserLocation).pipe(callInstagram).done(loadCardBack);
      $('#opening').hide();
      $('footer').show();
      $('.ff-container').show();
      $('#viewNearby').css('font-weight','bold');
      $('#viewSaved').on('click',function(){
        if($('#viewSaved').text()=='Clear'){
          $('#photoOverlay').hide();
          $('#photos').html('');
          localStorage.removeItem('filtr');
          setTimeout(function () {
            $('#viewNearby').trigger('click');
          }, 500);
        }
        if(localStorage['filtr']){
          $('#photoOverlay').hide();
          $('#viewSaved').css('font-weight','bold');
          $('#viewNearby').css('font-weight','normal');
          $('#photos').html('');
          getLocalData();
          $('#viewSaved').text("Clear");
        }
      });
      $('#viewNearby').on('click',function(){
        $('#photoOverlay').hide();
        $('#viewSaved').css('font-weight','normal');
        $('#viewNearby').css('font-weight','bold');
        $('#viewSaved').text("Saved");
        $('#photos').html('');
        $.Deferred(getUserLocation).pipe(callInstagram).done(loadCardBack);
      });
  });
});

function getUserLocation(deferred) { 
//check if the geolocation object is supported, if so get position
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){_displayLocation(position,deferred)}, _displayError);
  
}
else
  $('#location').innerHTML = "Sorry - your browser doesn't support geolocation!";
}

function _displayLocation(position, deferred) { 
//build text string including co-ordinate data passed in parameter
coords.lat =  position.coords.latitude;
coords.lon = position.coords.longitude;
var displayText = "User latitude is " + position.coords.latitude + " and longitude is " + position.coords.longitude;

//display the string for demonstration
$("#location").innerHTML = displayText;
deferred.resolve();
}

function _displayError(error) { 
//get a reference to the HTML element for writing result
var locationElement = $('#location');

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
}}

var callInstagram = function(){
  var dist = '1000';
  var d = $.Deferred();
  var urlHead = 'https://api.instagram.com/v1/media/search?';
  var urlLoc = 'lat='+coords.lat+'&lng='+ coords.lon+'&distance='+dist;
  var urlTail = '&client_id=c7367a799fe34e03829b0613a743fa92&callback=?';

  $.getJSON(encodeURI(urlHead+urlLoc+urlTail), function(resp){
    console.log(resp);
    photos = resp.data;
    // for(var i in resp.data){
    // var source = resp.data[i]['images']['thumbnail']['url'];
    // $('#photos').append('<img src="'+source+'"/>');
  // }
  }).done(function(p){
      d.resolve(p);
  }).fail(d.reject);

  return d.promise();
  }

var loadPhotos = function(){
  console.log(photos)
  for(var i in photos){
    var source = photos[i]['images']['thumbnail']['url'];
    $('#photos').append('<img src="'+source+'"/>');
  }
}

var loadCardBack = function(){
  for(var i in photos){
    if (i >= 12){ break;}
    var photo = photos[i],
        url = photo['images']['low_resolution']['url'],
        source = photo['images']['standard_resolution']['url'],
        location = (photo['location']['name'])?photo['location']['name']:photo['location']['latitude']+', '+ photo['location']['longitude'];
        link = photo['link'],
        user = photo['user']['username'],
        lat = photo['location']['latitude'],
        lon = photo['location']['longitude'],
        map = 'http://maps.googleapis.com/maps/api/staticmap?center='+lat+','+lon+
      '&zoom=13&size=306x150&maptype=roadmap&markers=color:blue%7C'+lat+','+lon+
      '&markers=color:red%7C'+coords.lat+','+coords.lon+'&sensor=false';
    $('#photos').append('<li><a href="#"><img src="'+url+'" alt="'+location+'" data-photo="'+photo+'" data-location="'+location+'" data-source="'+url+'" data-link="'+link+'" data-user="'+user+'" data-lat="'+lat+'" data-lon="'+lon+'" data-map="'+map+'"/></a></li>');
  }
  $('#photos img').on('click', function(){
    // $('#photos').block({message:null});
    $('#photoOverlay').empty();
    $('#photoOverlay').show();
    $('#photoOverlay').append(
      '<div class="flip">'+
        '<div class="card">'+
          '<div class="face front">'+
            '<img src="'+$(this).data('source')+'"/>'+
          '</div>'+
          '<div class="face back" >'+
              '<div class="overlayHeader"><span>x</span></div>'+
              '<span class="ss-icon">Location</span> <a href="https://maps.google.com/maps?q='+$(this).data('lat')+','+$(this).data('lon')+'">'+$(this).data('location')+'</a><br/>'+
              '<span class="ss-icon">User</span> '+$(this).data('user')+'<br/>'+
              '<span class="ss-icon ss-social">Instagram</span> <a href="'+$(this).data('link')+'" target="_blank">View on Instagram</a>'+
            '<img src="'+$(this).data('map')+'"/>'+
            '<input type="button" value="Save Photo" class="save" data-photo="'+$(this).data('photo')+'" data-location="'+$(this).data('location')+'" data-source="'+$(this).data('source')+'" data-link="'+$(this).data('link')+'" data-user="'+$(this).data('user')+'" data-lat="'+$(this).data('lat')+'" data-lon="'+$(this).data('lon')+'" data-map="'+$(this).data('map')+'"></input>'+
            '<p id="save_complete">Saved</p>'+
          '</div>'+
        '</div>'+
      '</div>'
    );
    $('#save_complete').hide();
    $('.overlayHeader span').on('click', function() {
      $('#photoOverlay').hide();
      // $('#photos').unblock();
    });
    $('.flip').on('click', function() {
      $(this).find('.card').addClass('flipped');
      // return false;
    });
    setTimeout(function () {
      $('.flip').trigger('click');
    }, 1000);
    $('.save').on('click',function(){
        console.log($(this).data());
        var thisPhoto = $(this).data();
        var filterObjs = JSON.parse(localStorage.getItem('filtr'));
        console.log(filterObjs);
        if(filterObjs === null){
          filterObjs = [];
          filterObjs[0] = thisPhoto;
        }
        else
          filterObjs.push(thisPhoto);
        console.log(filterObjs);
        localStorage.setItem('filtr',JSON.stringify(filterObjs));
        $('.save').hide();
        $('#save_complete').show();

    });
  });
}


var getLocalData = function(){
  storedData = JSON.parse(localStorage.getItem('filtr'));
  photos = [];
  for(var i in storedData){
    photos.push({});
    photos[i]['images']={};
    photos[i]['images']['low_resolution']={};
    photos[i]['images']['low_resolution']['url'] =  storedData[i]['source'];
    photos[i]['images']['standard_resolution'] = {};
    photos[i]['images']['standard_resolution']['url'] =  storedData[i]['source'];
    photos[i]['location']={};
    photos[i]['location']['name'] =  storedData[i]['location'];
    photos[i]['link'] =  storedData[i]['link'];
    photos[i]['user']={};
    photos[i]['user']['username'] = storedData[i]['user'];
    photos[i]['location']={};
    photos[i]['location']['latitude']  = storedData[i]['lat'];
    photos[i]['location']['longitude']  = storedData[i]['lon'];
  }
  console.log(photos);
  // $('#photos').html('');
  loadCardBack();
}