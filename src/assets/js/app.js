;(function() {
  $(document).foundation();
  $('.ba-slider').slick({
  	dots: true,
    centerMode: true
  });
  $('.ba-slider-2').slick({
    dots: false
  });
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 9
  });
}
  initMap();
  var torreMarker = new google.maps.Marker({
      position: map,
      map: map,
      title: "Torre",
      icon: 'assets/img/contact/marker.png'
      });
})();
