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
            let sectionTop = $(this).offset().top - 100; // Adjust for navbar height
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

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
          $(".navbar").addClass("scrolled");
        } else {
          $(".navbar").removeClass("scrolled");
        }
      });


    function animateCounter(id, start, end, duration) {
        $({ countNum: start }).animate(
            { countNum: end },
                {
                    duration: duration,
                    easing: "linear",
                    step: function () {
                        $(id).text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $(id).text(this.countNum);
                    }
                }
        );
    }
    
        animateCounter("#counter", 0, 1000, 2000);
        animateCounter("#counter2", 0, 40, 2000);
        animateCounter("#counter3", 0, 99, 2000);
        animateCounter("#counter4", 0, 50, 2000);
    
});
  