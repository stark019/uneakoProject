jQuery(document).ready(function( $ ) {

  // Preloader
  $(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });

  // Hero rotating texts
  $("#hero .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
  });
  
  // Initiate the wowjs
  new WOW().init();
  
  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {opacity:'show'},
    speed: 400
  });
  
  // Mobile Navigation
  if( $('#nav-menu-container').length ) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
      $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
      $('body').append( $mobile_nav );
      $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
      $('body').append( '<div id="mobile-body-overly"></div>' );
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
      
      $(document).on('click', '.menu-has-children i', function(e){
          $(this).next().toggleClass('menu-item-active');
          $(this).nextAll('ul').eq(0).slideToggle();
          $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });
      
      $(document).on('click', '#mobile-nav-toggle', function(e){
          $('body').toggleClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').toggle();
      });
      
      $(document).click(function (e) {
          var container = $("#mobile-nav, #mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
             if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }
          }
      });
  } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
  }
  
  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length) {
              
              var top_space = 0;
              
              if( $('#header').length ) {
                top_space = $('#header').outerHeight();
              }
              
              $('html, body').animate({
                  scrollTop: target.offset().top - top_space
              }, 1500, 'easeInOutExpo');

              if ( $(this).parents('.nav-menu').length ) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
              }

              if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }
              
              return false;
          }
      }
  });
  
  // Back to top button
  $(window).scroll(function() {

      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
      
  });
  
  $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
  });

});

$(document).ready(function(){
  
$('.testimonials').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
   
      ]
  });
 
  });

  // modal-boxes-js
  $(document).ready(function(){
    //modal-boxes
    document.querySelectorAll(".portfolio-item")[0].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[0].style.display = "block";
    });
    document.querySelectorAll(".close-box")[0].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[0].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[0].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[0]){
        document.querySelectorAll('.modal-box')[0].style.display = "none";
      }
    });
  
  
    document.querySelectorAll(".portfolio-item")[1].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[1].style.display = "block";
    });
    document.querySelectorAll(".close-box")[1].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[1].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[1].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[1]){
        document.querySelectorAll('.modal-box')[1].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[2].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[2].style.display = "block";
    });
    document.querySelectorAll(".close-box")[2].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[2].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[2].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[2]){
        document.querySelectorAll('.modal-box')[2].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[3].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[3].style.display = "block";
    });
    document.querySelectorAll(".close-box")[3].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[3].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[3].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[3]){
        document.querySelectorAll('.modal-box')[3].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[4].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[4].style.display = "block";
    });
    document.querySelectorAll(".close-box")[4].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[4].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[4].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[4]){
        document.querySelectorAll('.modal-box')[4].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[5].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[5].style.display = "block";
    });
    document.querySelectorAll(".close-box")[5].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[5].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[5].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[5]){
        document.querySelectorAll('.modal-box')[5].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[6].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[6].style.display = "block";
    });
    document.querySelectorAll(".close-box")[6].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[6].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[6].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[6]){
        document.querySelectorAll('.modal-box')[6].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[7].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[7].style.display = "block";
    });
    document.querySelectorAll(".close-box")[7].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[7].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[7].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[7]){
        document.querySelectorAll('.modal-box')[7].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[8].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[8].style.display = "block";
    });
    document.querySelectorAll(".close-box")[8].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[8].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[8].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[8]){
        document.querySelectorAll('.modal-box')[8].style.display = "none";
      }
    });
  
    document.querySelectorAll(".portfolio-item")[9].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[9].style.display = "block";
    });
    document.querySelectorAll(".close-box")[9].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[9].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[9].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[9]){
        document.querySelectorAll('.modal-box')[9].style.display = "none";
      }
    });
  
  
    document.querySelectorAll(".portfolio-item")[10].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[10].style.display = "block";
    });
    document.querySelectorAll(".close-box")[10].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[10].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[10].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[10]){
        document.querySelectorAll('.modal-box')[10].style.display = "none";
      }
    });
  
  
    document.querySelectorAll(".portfolio-item")[11].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[11].style.display = "block";
    });
    document.querySelectorAll(".close-box")[11].addEventListener("click", function(){
      document.querySelectorAll('.modal-box')[11].style.display = "none";
    });
    document.querySelectorAll('.modal-box')[11].addEventListener('click', function(e){
      if(e.target == document.querySelectorAll('.modal-box')[11]){
        document.querySelectorAll('.modal-box')[11].style.display = "none";
      }
    });
  
  });


  