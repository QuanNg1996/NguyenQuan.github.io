$(document).ready(() => {
  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function() {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top -270
    }, 2000);
  });

  $('#button').on('click', function() {
    $('html, body').animate({
      scrollTop: 575
    }, 2000)
  });

  $('#up').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 2000)
  });

  AOS.init({
    easing: 'ease',
    duration: 1500,
    once: true
  });
});
