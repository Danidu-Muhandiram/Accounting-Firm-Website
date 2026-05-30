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
                }, index * 500);
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

    // Scroll Indicator Functionality
    $('.scroll-indicator').click(function() {
        $('html, body').animate({
            scrollTop: $('.aboutus').offset().top - 80
        }, 800);
    });

    // Hide scroll indicator when scrolling down
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        var heroHeight = $('.slider-wrapper').height();
        
        if (scrollPosition > heroHeight * 0.3) {
            $('.scroll-indicator').fadeOut(300);
        } else {
            $('.scroll-indicator').fadeIn(300);
        }
    });
    
    // Services horizontal scrolling with arrows
    $('.services-arrow.right').on('click', function(){
        const $wrapper = $(this).closest('.services-scroll-wrapper');
        const $track = $wrapper.find('.services-track');
        const amount = $wrapper.width() * 0.7; // scroll by 70% of visible width
        $track.animate({scrollLeft: $track.scrollLeft() + amount}, 400);
    });

    $('.services-arrow.left').on('click', function(){
        const $wrapper = $(this).closest('.services-scroll-wrapper');
        const $track = $wrapper.find('.services-track');
        const amount = $wrapper.width() * 0.7;
        $track.animate({scrollLeft: $track.scrollLeft() - amount}, 400);
    });
            
});

// Contact modal loader: fetches the modal fragment and shows it.
// Adds click handler for links with `open-contact` class.
$(document).on('click', 'a.open-contact', function(e){
    e.preventDefault();
    loadContactModal();
});

function loadContactModal(){
    try{
        if (!document.getElementById('contact-modal-injected')){
                        fetch('contact-modal.html')
                        .then(function(resp){ return resp.text(); })
                        .then(function(html){
                                injectModalHtml(html);
                        })
                        .catch(function(err){
                                console.warn('Fetch failed, falling back to inline modal template:', err);
                                // Fallback: inject an inline template (helps when running pages via file://)
                                var fallbackHtml = `
<div class="modal fade rounded" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-body p-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 p-0">
                            <img src="images/contactimage.jpg" alt="Contact Us" class="img-fluid h-100 w-100" style="object-fit: cover;">
                        </div>
                        <div class="col-lg-8">
                            <form action="" class="row p-lg-5 gy-3">
                                <div class="col-12">
                                    <h1>We're Just a Message Away</h1>
                                    <p>Whether it's about our services or your financial goals, we're always ready to assist. Send us a message, and we'll respond promptly</p>
                                </div>
                                <div class="col-lg-6">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name">
                                </div>
                                <div class="col-lg-6">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name">
                                </div>
                                <div class="col-lg-6">
                                    <label for="contactEmail" class="form-label">Email</label>
                                    <input type="email" class="form-control mb-3" id="contactEmail" placeholder="you@example.com">
                                    <label for="contactMessage" class="form-label">Message</label>
                                    <textarea id="contactMessage" class="form-control mb-3" rows="5" placeholder="Tell us how we can help..."></textarea>
                                </div>
                                <div class="col-12 buttons-row">
                                    <button type="button" class="btn btn-outline-secondary btn-cancel" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary btn-save">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
                                injectModalHtml(fallbackHtml);
                        });
        } else {
            var modalEl = document.querySelector('#exampleModal');
            if(modalEl){
                // attach handlers if not already attached
                if (!modalEl.dataset.modalEventsAttached){
                    modalEl.addEventListener('shown.bs.modal', function(){
                        document.body.classList.add('modal-blur');
                    });
                    modalEl.addEventListener('hidden.bs.modal', function(){
                        document.body.classList.remove('modal-blur');
                        var injected = document.getElementById('contact-modal-injected');
                        if(injected) injected.remove();
                    });
                    modalEl.dataset.modalEventsAttached = '1';
                }
                var modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        }
    } catch (err) {
        console.error('loadContactModal error', err);
    }
}

function injectModalHtml(html){
        var wrapper = document.createElement('div');
        wrapper.id = 'contact-modal-injected';
        wrapper.innerHTML = html;
        document.body.appendChild(wrapper);
        var modalEl = document.querySelector('#exampleModal');
        if(modalEl){
                // ensure blur class is toggled on modal show/hide
                modalEl.addEventListener('shown.bs.modal', function(){
                        document.body.classList.add('modal-blur');
                });
                modalEl.addEventListener('hidden.bs.modal', function(){
                        document.body.classList.remove('modal-blur');
                        // remove injected fragment to keep DOM clean
                        var injected = document.getElementById('contact-modal-injected');
                        if(injected) injected.remove();
                });

                var modal = new bootstrap.Modal(modalEl);
                modal.show();
        }
}
