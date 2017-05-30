 function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -8.7832, lng: -55.4915},
    zoom: 3
  });
  var successLocation = function (position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    map.setCenter(pos);
    map.setZoom(18);
    var marker = new google.maps.Marker({
    position: {lat: position.coords.latitude, lng: position.coords.longitude},
    map: map,
    title: 'Hello World!'
    });
  }
  var errorLocation = function () {
    alert("Lo sentimos, no podemos encontrar tu ubicación");
  }
  // Try HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  } else {
    // Browser doesn't support Geolocation
    errorLocation();
  }
}
