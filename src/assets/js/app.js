;(function() {
  $(document).foundation();
  $('.ba-slider').slick({
  	dots: true,
    centerMode: true
  });
  $('.ba-slider-2').slick({
    dots: false
  });
    window.onload = function(){

        var creativ = {lat: -7.924430, lng: 112.637898};
        var mapDiv = document.querySelector('.map');

          var map = new google.maps.Map(mapDiv, {
          zoom: 16,
          center: creativ

        });

          var marker = new google.maps.Marker({
          position: creativ,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'assets/img/pin.png'
        });

        google.maps.event.addDomListener(window, 'resize', function(){

          var center = map.getCenter();
          google.maps.event.trigger(map, 'resize');
          map.setCenter(center);

      });

  };
})();
