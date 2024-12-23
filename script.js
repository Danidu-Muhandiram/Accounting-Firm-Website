$(document).ready(function() {
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots: false,
        smartSpeed: 1000,
        responsive:{
            0:{
               
            },
            600:{
              
            },
            1000:{
                
            }
        }
    });

    //navigation bar activation
    $(window).on("scroll", function () {
        //current scroll position
        let scrollPos = $(window).scrollTop();

        $("section").each(function () {
            let sectionTop = $(this).offset().top - 10; // Adjust for navbar height
            let sectionHeight = $(this).outerHeight();
            let sectionId = $(this).attr("id");

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove 'active' class from all links
                $(".nav-link").removeClass("active");
                // Add 'active' class to the current link
                $(`.nav-link[href='#${sectionId}']`).addClass("active");
            }
        });
    });
});
  