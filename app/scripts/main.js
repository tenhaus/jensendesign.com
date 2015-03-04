$(document).ready(function() {
  console.log('\'Allo \'Allo!');
  $('.logo-carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    easing: 'easeOutBack',
    edgeFriction: 0.5,
    useCSS: false,
    speed: 1000
  });

});
