$(document).ready(function()
{

    //init ScrollMagic
    var controller = new ScrollMagic.Controller();


    //Loop through each product
    $('.product').each(function () {
        //build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '90%'
        })
            .setClassToggle(this, 'fade-in') //add class to product01
            .addTo(controller);
    });

    var pinLandingPage = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 1,
        duration: '100%'
    })
        .setPin('#lintro',{ pushFollowers: false})
        .addTo(controller);

    //pin again
    var pinLandingPage2 = new ScrollMagic.Scene({
        triggerElement: '#product01',
        triggerHook: 0.9
    })
        .setPin('#intro',{ pushFollowers: false})
        .addTo(controller);

});


// ScrollSpy

function scrollNav() {
    $('.nav-item a').click(function () {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 200);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();


(function ($) {
    "use strict"; // Start of use strict
  
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });
  
    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
  })(jQuery); // End of use strict
  
  









