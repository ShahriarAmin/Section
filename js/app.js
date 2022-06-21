$(function(){
    $('#lg_menu_toggler').on('click', function () {
        $('#nav_logo, #nav #main_menu > ul').toggleClass('active')
     })
     $('.banner_slider').slick({
        prevArrow: $('#banner_left_arrow'),
        nextArrow: $('#banner_right_arrow'),
     });
     $('.service_item_container').slick({
      slidesToShow: 3,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               arrows:true,
            }
         }
      ],
   })
   $(window).on('scroll', function(){
      var scrollSize = $(document).scrollTop();
      console.log($(document).scrollTop());
      if(scrollSize > 500){
          $('#backToTop').fadeIn();
      }
      else{
          $('#backToTop').fadeOut();
      }
  });

  $('#backToTop').on('click', function(){
      $('html, body').animate({
          scrollTop: 0
      }, 500)
  });
})