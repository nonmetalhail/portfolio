function getUserLocation(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){_displayLocation(t,e)},_displayError):$("#location").innerHTML="Sorry - your browser doesn't support geolocation!"}function _displayLocation(e,t){coords.lat=e.coords.latitude;coords.lon=e.coords.longitude;var n="User latitude is "+e.coords.latitude+" and longitude is "+e.coords.longitude;$("#location").innerHTML=n;t.resolve()}function _displayError(e){var t=$("#location");switch(e.code){case e.PERMISSION_DENIED:t.innerHTML="Permission was denied";break;case e.POSITION_UNAVAILABLE:t.innerHTML="Location data not available";break;case e.TIMEOUT:t.innerHTML="Location request timeout";break;case e.UNKNOWN_ERROR:t.innerHTML="An unspecified error occurred";break;default:t.innerHTML="Who knows what happened..."}}var coords={lat:"",lon:""},photos=[];$(document).ready(function(){$("#filtr").on("click",function(){$.Deferred(getUserLocation).pipe(callInstagram).done(loadCardBack);$("#opening").hide("slow")})});var callInstagram=function(){var e="1000",t=$.Deferred(),n="https://api.instagram.com/v1/media/search?",r="lat="+coords.lat+"&lng="+coords.lon+"&distance="+e,i="&client_id=c7367a799fe34e03829b0613a743fa92&callback=?";$.getJSON(encodeURI(n+r+i),function(e){console.log(e);photos=e.data}).done(function(e){t.resolve(e)}).fail(t.reject);return t.promise()},loadPhotos=function(){console.log(photos);for(var e in photos){var t=photos[e].images.thumbnail.url;$("#photos").append('<img src="'+t+'"/>')}},loadCardBack=function(){for(var e in photos){var t=photos[e].images.low_resolution.url,n=photos[e].link,r=photos[e].location.name?photos[e].location.name:photos[e].location.latitude+", "+photos[e].location.longitude,i=photos[e].user.username,s=photos[e].location.latitude,o=photos[e].location.longitude,u="http://maps.googleapis.com/maps/api/staticmap?center="+s+","+o+"&zoom=13&size=306x150&maptype=roadmap&markers=color:blue%7C"+s+","+o+"&markers=color:red%7C"+coords.lat+","+coords.lon+"&sensor=false";$("#photos2").append('<div class="f1_container"><div class="f1_card" class="shadow"><div class="front face"><img src="'+t+'"/>'+"</div>"+'<div class="back face center">'+'<div class="wrap">'+'<span class="ss-icon">Location</span> '+r+"</div>"+'<div class="wrap">'+'<span class="ss-icon">User</span> '+i+"</div>"+'<div class="wrap">'+'<span class="ss-icon ss-social">Instagram</span> <a href="'+n+'">'+n+"</a>"+"</div>"+'<img src="'+u+'"/>'+"</div>"+"</div>"+"</div>")}};