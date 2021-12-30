/**
*
* -----------------------------------------------------------------------------
*
* Template : Tekhub - Multipurpose Startups HTML5 Template
* Author : rs-theme
* Author URI : http://rstheme.com/ 

* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });
    
    var rs_skillbar = $('.skillbar');
    if(rs_skillbar.length){
    // Skill bar            
        $('.skillbar').skillBars({  
            from: 0,    
            speed: 4000,    
            interval: 100,  
            decimals: 0,    
        });
    }

    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),

        // lg device
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        autoplay = owlCarousel.data('autoplay'),
        smartSpeed = owlCarousel.data('smart-speed'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        center= owlCarousel.data('center'),
        hoverPause = owlCarousel.data('hoverpause'),

        // md device
        itemsMd = owlCarousel.data('items-md'),
        navMd = owlCarousel.data('nav-md'),
        dotsMd = owlCarousel.data('dots-md'),
        marginMd = owlCarousel.data('margin-md'),
        centerMd = owlCarousel.data('center-md'),

        // sm device
        itemsSm = owlCarousel.data('items-sm'),
        navSm = owlCarousel.data('nav-sm'),
        dotsSm = owlCarousel.data('dots-sm'),
        marginSm = owlCarousel.data('margin-sm'),

        // xs device
        itemsXs = owlCarousel.data('items-xs'),
        navXs = owlCarousel.data('nav-xs'),
        marginXs = owlCarousel.data('margin-xs'),
        dotsXs = owlCarousel.data('dots-xs');

        owlCarousel.owlCarousel({
            
            // Default Function
            loop: (loop ? true : false),
            lazyLoad: true,
            autoplayHoverPause: (hoverPause ? true : false),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            responsive: {

                // xs device
                0: {
                    items: (itemsXs ? itemsXs : 1),
                    nav: (navXs ? true : false),
                    dots: (dotsXs ? true : false),
                    center: false,
                    margin: (marginXs ? marginXs : 0),
                },

                // sm device
                576: {
                    items: (itemsSm ? itemsSm : 3),
                    nav: (navSm ? true : false),
                    dots: (dotsSm ? true : false),
                    center: false,
                    margin: (marginSm ? marginSm : 0),
                },

                // md device
                768: {
                    items: (itemsMd ? itemsMd : 4),
                    nav: (navMd ? true : false),
                    dots: (dotsMd ? true : false),
                    center: (centerMd ? true : false),
                    margin: (marginMd ? marginMd : 0),
                },

                // lg device
                992: {
                    items: (items ? items : 4),
                    margin: (margin ? margin : 0),
                    dots: (dots ? true : false),
                    nav: (nav ? true : false),
                    center: (center ? true : false),
                }
            }
        });
    });


    // Counter Up
    if ($('.rs-count').length) {  
        $('.rs-count').counterUp({
            delay: 20,
            time: 1500
        });
    }

   // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }

    /*----------------------------
    Single Product js active
    ------------------------------ */
    var single_product_image = $('.single-product-image');
    if(single_product_image.length) {
        $('.single-product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-product-nav'
        });
    }

    var single_product_nav = $('.single-product-nav');
    if(single_product_nav.length) {
        $('.single-product-nav').slick({
            slidesToShow: 4,
            asNavFor: '.single-product-image',
            dots: false,
            focusOnSelect: true,
            centerMode:false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 591,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ] 
        });
    }

    //Videos popup jQuery 
    var popup = $('.popup-videos');
    if(popup.length) {
        $('.popup-videos').magnificPopup({
            disableOn: 10,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        }); 
    }

    // magnificPopup init
    var popupimage = $('.image-popup');
    if(popupimage.length) {
        $('.image-popup').magnificPopup({
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
                }
            },
            gallery: {
                enabled: true
            }
        });
    }
    

    // scrollTop init
    var totop = $('#scrollUp'); 
    if(totop.length){   
        win.on('scroll', function() {
            if (win.scrollTop() > 150) {
                totop.fadeIn();
            } else {
                totop.fadeOut();
            }
        });
        totop.on('click', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 500)
        });
    }

    // Chat Box Active
    $(".chatbox-part .chat-icon i").on('click', function(){
        $(this).parents('.chatbox-part').children('.chatbox').toggleClass("active");
    });

    $(".chatbox-part .chatbox-top .close-icon i").on('click', function(){
        $(this).parents('.chatbox-part').children('.chatbox').removeClass("active");
    });

    //preloader
    $(window).on( 'load', function() {
        $("#tekhub-load").delay(1000).fadeOut(500);
    })

    
})(jQuery);







