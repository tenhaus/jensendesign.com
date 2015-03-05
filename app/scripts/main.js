$(document).ready(function() {
  console.log('\'Allo \'Allo!');
  $('.logo-carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    variableWidth: true,
    easing: 'easeOutBack',
    edgeFriction: 0.5,
    useCSS: false,
    speed: 1000
  });

});
