(function($) {
    $('.form-check-input').click(function(){
	var checkbox1 = $('#terms_checkbox1')
	var checkbox2 = $('#terms_checkbox2')
    	if(checkbox1.is(':checked') && checkbox2.is(':checked'))
    	{
    		$('#next-personal').prop('disabled',false);
    	}
    	else
    	{
    		$('#next-personal').prop('disabled',true);
    	}
    });

    "use strict";

    var particlesConfig = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#a2242d"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
        particlesJS("particles-js", particlesConfig);
        $('#particles-js').css('background-color', 'black');


    

    // Set the date we're counting down to
    var countDownDate = new Date("Oct 2, 2017 15:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get todays date and time
      var now = new Date().getTime();
    
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = "Crowdsale starts in: " + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    function init_values() {
    	$('#eth-contr').val(0.1);
    	$('#total-bonus-dme').val(210);
    	$('#total-dme').val(175);
    }

    [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
          img.removeAttribute('data-src');
        };
    });

    function get_bonus_multiplier() {
	var percent = $('#bonus-dme').val();
	var result = (parseFloat(percent) + 100.0) / 100.0;
        return result;
    }

    $('#contract_button').click(function() {
        $.get('/contract', function(data) {
	    $('#contract-address-label').text('Ethereum contract address:');
	    $('#contract-address').text(data);
        });
    });


    $('#subscribe_button').click(function() {
	var email = $('#email_input').val();
	$.get('/subscribe?email=' + email, function(data) {
	    //$.magnificPopup.instance.close(); 
	    $('.alert-success').show();
	    $('#email_input').val('');
	});
    });
    $( document ).ready(function() {
	var checkbox1 = $('#terms_checkbox1')
	var checkbox2 = $('#terms_checkbox2')
    	if(checkbox1.is(':checked') && checkbox2.is(':checked'))
    	{
    		$('#next-personal').prop('disabled',false);
    	}
    	else
    	{
    		$('#next-personal').prop('disabled',true);
    	}
    });


    init_values();
    $('#eth-contr').change(function() {
	var value = $(this).val();
	var rate = 1750;
        var multiplier = get_bonus_multiplier();
	$('#total-bonus-dme').val(value * multiplier * rate);
	$('#total-dme').val(value * rate);
    });

    $('#total-bonus-dme').change(function() {
	var value = $(this).val();
	var rate = 1750;
        var multiplier = get_bonus_multiplier();
        var dme = value / multiplier;
	$('#total-dme').val(dme);
	$('#eth-contr').val(dme / rate);
    });



    /* ------------ PAGE LOADING ------------ */

    // hide header first
    $('.fadeInOnLoad').css('opacity', 0);

    // closing loading section on click
    // useful for bored users
    $('#loading').on('click', function() {
        $("#loading").fadeOut();
    });
    /*On Page Load, Fadecout Loading, Start Scroll Animation*/
    $(window).load(function() {
        $("#loading").fadeOut();
        $("#loading .object").delay(700).fadeOut("slow");
        // Show header on load
        $('.fadeInOnLoad').delay(700).fadeTo("slow", 1);

        /*Iniitate Scroll Animation*/
        bodyScrollAnimation()
    })


    /* ------------ ON SCROLL ANIMATION ------------ */


    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }


    /* ------------ SCROLL SPY ------------ */


    /*Scroll Spy*/
    $('body').scrollspy({
        target: '#main-navbar',
        offset: 100
    });



    /* ================================================
       Scroll Functions
       ================================================ */
	var page = $("html, body");
	
	$( "section" ).click(function(e) {
	
	});


    $('nav a[href^="#"]:not([href="#"]), .back_to_top, .explore').on('click', function(event) {
	page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
	    page.stop();
	});

        var $anchor = $(this);
	
	page.animate({ scrollTop: $($anchor.attr('href')).offset().top - 70 }, 'slow', function(){
	    page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
	});
	
	return false; 
    });



    /* ---------- Nav BG ON Scroll---------- */

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        height = $('#particles-js').height();
	offset = height - scroll;
	
	//if (scroll >= height / 2) {
	//    middle = height / 2;
	//    opacity = 1 - ((scroll - middle) / middle);
	//    $('.white-logo').css({ opacity: opacity });
	//} else {
	//    $('.white-logo').css({ opacity: 1.0 });
	//}
	
        if (scroll >= height) {
            $(".navbar-default").addClass("is-scrolling");
        } else {
            $(".navbar-default").removeClass("is-scrolling");
        }
    });


    /* ---------- Back to Top ---------- */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $('.back_to_top').fadeIn('slow');
        } else {
            $('.back_to_top').fadeOut('slow');
        }
    });


    /* ---------- Background Video ---------- */

    if ($('#BGVideo').length) {
        $("#BGVideo").mb_YTPlayer();
    }


    /* ---------- Play Video POPUP ---------- */

    if ($('.video').length) {
        $('.video').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video 

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }


                },

                srcAction: 'iframe_src',
            }
        });

    }

    /* ---------- PRODUCT POPUP ---------- */

    if ($('a[href="#product-choose"]').length) {

        $('a[href="#product-choose"]').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            midClick: true // mouse middle button click
        });

    }


    /* ---------- MAGNIFIC POPUP ---------- */

    $('.gallery').each(function() {

        $('.gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: { enabled: true },
            mainClass: 'mfp-fade'
        });

    });

    /* ---------- QUANTITY TOUCHSPIN ---------- */

    if ($('.quanity').length) {

        $('.quanity').TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'glyphicon glyphicon-plus',
            verticaldownclass: 'glyphicon glyphicon-minus'
        });

    }

    /* ---------- SELECTPICKER ---------- */

    if ($('.selectpicker').length) {
        $('.selectpicker').selectpicker();
    }


    /*Feature Notes*/
    $('.feature-note .plus-icon .plus').on('click', function() {
        if ($(this).parents('.feature-note').hasClass('show-cont')) {
            $(this).parents('.feature-note').removeClass('show-cont')
        } else {
            $(this).parents('.feature-note').addClass('show-cont')
        }
    });


    /* ---------- CONTACT FORM FLIPBOX ---------- */

    $('.flip-contact-box').on('click', function() {
        if (!$('.flip-box-container').hasClass('show-form')) {
            $('.flip-box-container').addClass('show-form')
        }
    });

    $('.js-close-flip').on('click', function() {
        $('.flip-box-container').removeClass('show-form');
    });




    /* ================================================
       Paypal Form Validation
       ================================================ */

    /* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

    if ($.fn.validator) {

        $.validator.setDefaults({
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorPlacement: function(error, element) {}
        });
    }

    if ($.fn.validator) {
        // validate Registration Form
        $("#paypal-regn").validate({
            rules: {
                first_name: "required",
                last_name: "required",
                email: {
                    required: true,
                    email: true
                },
                os0: "required",
                quantity: "required",
                agree: "required"
            },
            messages: {
                first_name: "Your first name",
                last_name: "Your last name",
                email: "We need your email address",
                os0: "Choose your Pass",
                quantity: "How many seats",
                agree: "Please accept our terms and privacy policy"
            },
            submitHandler: function(form) {
                $("#reserve-btn").attr("disabled", true);
                form.submit();
                //console.log($(form).serialize())
            }
        });
    }

    /* ---------- INITIATE EXIT MODAL ---------- */

    var dataexitpopuop = $('body').data('exit-modal');

    if ($('#exit-modal').length && dataexitpopuop === true) {

        var _ouibounce = ouibounce($('#exit-modal')[0], {
            aggressive: true, // use false here to hide message once shown
            timer: 0,
            callback: function() { // if you need to do something, write here
            }
        });
        $('body').on('click', function() {
            $('#exit-modal').hide();
        });
        $('#exit-modal .modal-footer').on('click', function() {
            $('#exit-modal').hide();
        });
        $('#exit-modal .exit-modal').on('click', function(e) {
            e.stopPropagation();
        });

    }





})(jQuery);
