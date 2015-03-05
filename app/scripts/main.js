$(document).ready(function() {
  $('.logo-carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
    easing: 'easeOutBack',
    edgeFriction: 0.5,
    useCSS: false,
    speed: 1000
  });
});
