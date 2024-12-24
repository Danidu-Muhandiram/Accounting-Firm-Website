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

      


        const $counters = $(".counter");
        
        function updateCounter($counter) {
            const target = parseInt($counter.data("count"));
            let count = 0;
            const duration = 2000; // Duration of the animation in milliseconds
            const stepTime = Math.abs(Math.floor(duration / target));
        
            const increment = () => {
            count += 1;
            $counter.text(count);
            if (count < target) {
                setTimeout(increment, stepTime);
            } else {
                $counter.text(target);
            }
            };
        
            increment();
        }
    
        function checkActivation() {
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();
    
            $counters.each(function () {
                const $counter = $(this);
                const offsetTop = $counter.offset().top;
    
                // Check if the element is within view
                    if (scrollTop + windowHeight > offsetTop - 100 && !$counter.data("activated")) {
                        updateCounter($counter);
                        $counter.data("activated", true); // Avoid reactivating
                    }
        
                    // Reset if scrolled back
                    if (scrollTop + windowHeight < offsetTop - 500 || scrollTop === 0) {
                        $counter.text("0");
                        $counter.data("activated", false);
                    }
                });
        }
    
        // Run on load and on scroll
        checkActivation();
        $(window).on("scroll", checkActivation);
        
    
});
  