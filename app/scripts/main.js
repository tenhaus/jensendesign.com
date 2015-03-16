'use strict';

$(document).ready(function() {
  $('.fancybox').fancybox({
    helpers: {
      media: {}
    }
  });
});

function initialize() {
  var point = new google.maps.LatLng(39.324422, -76.629472);
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: point,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: point,
    map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
