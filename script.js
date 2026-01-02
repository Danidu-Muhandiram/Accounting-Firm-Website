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

    //changing navigation bar
    $(window).on("scroll", function(){
        if ($(this).scrollTop()>45){
            $(".custom-navbar").addClass("scrolled");
        }

        else{
            $(".custom-navbar").removeClass("scrolled");
        }
    });


    function updateActiveNav() {
    let scrollPos = $(window).scrollTop();
    let navbarheight = 50;
    let activestatus = false;
    let firstSection = $("section:first").attr("id");

    $("[id]").each(function () {
        let sectionTop = $(this).offset().top; 
        let sectionHeight = $(this).outerHeight();
        let sectionId = $(this).attr("id");

        if (scrollPos >= sectionTop - navbarheight && scrollPos < sectionTop + sectionHeight - navbarheight) {
            $(".nav-link").removeClass("active");
            $(`.nav-link[href='#${sectionId}']`).addClass("active");
            activestatus = true;
        }

    });

    if(!activestatus){
        $(".nav-link").removeClass("active");
        $(`.nav-link[href='#${firstSection}']`).addClass("active");
    }
}

updateActiveNav();
$(window).on("scroll", updateActiveNav);

      


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
    
        checkActivation();
        $(window).on("scroll", checkActivation);
        

        //about us animations
        $(window).on("scroll", function() {
            $(".aboutus, .services, .feedback").each(function() {
              var elementTop = $(this).offset().top;
              var windowBottom = $(window).scrollTop() + $(window).height();
              if (windowBottom > elementTop + 150) {
                $(this).addClass("aboutus-animation");
              }
            });
        });

        //service section boxes
        $(".service-box").css("opacity", "0");

        function revealServices() {
            var sectionTop = $(".services").offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > sectionTop + 100) { 
            $(".service-box").each(function (index) {
                setTimeout(() => {
                $(this).fadeTo(1000, 1).addClass("service-box-show");
                }, index * 1500);
            });

            $(window).off("scroll", revealServices);
            }
        }

        $(window).on("scroll", revealServices);


        //steps animations in service page
        $(".steps").css("opacity", "0");

            $(".steps").each(function (index) {
                setTimeout(() => {
                $(this).fadeTo(1000, 1).addClass("steps-show");
                }, index * 1000);
            });

            
        // Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotText = document.getElementById('chatbot-text');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
  if (chatbot.style.display === 'none' || chatbot.style.display === '') {
    chatbot.style.display = 'flex';
  } else {
    chatbot.style.display = 'none';
  }
});

chatbotClose.addEventListener('click', () => {
  chatbot.style.display = 'none';
});

// Send message
chatbotSend.addEventListener('click', () => {
  const userMessage = chatbotText.value.trim();
  if (userMessage) {
    const messageElement = document.createElement('div');
    messageElement.textContent = userMessage;
    messageElement.style.margin = '5px 0';
    messageElement.style.padding = '8px';
    messageElement.style.background = '#f1f1f1';
    messageElement.style.borderRadius = '5px';
    chatbotMessages.appendChild(messageElement);
    chatbotText.value = '';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});

// Make chatbot toggle button draggable
let isDragging = false;
let offsetX, offsetY;

chatbotToggle.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - chatbotToggle.getBoundingClientRect().left;
  offsetY = e.clientY - chatbotToggle.getBoundingClientRect().top;
  chatbotToggle.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    chatbotToggle.style.left = `${x}px`;
    chatbotToggle.style.top = `${y}px`;
    chatbotToggle.style.position = 'fixed';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  chatbotToggle.style.transition = '';
});
            
});
