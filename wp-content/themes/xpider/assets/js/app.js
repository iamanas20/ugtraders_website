(function ($) {
    "use strict";
    /* ---------------------------------------------
    Navigation menu
    --------------------------------------------- */
    // dropdown for mobile
    $(document).ready(function () {
        checkWidth(true);
        $(window).resize(function () {
            checkWidth(true);
        });
    });

    function checkWidth(init) {
        // If browser resized, check width again
        if ($(window).width() <= 991) {
            $('.dropdownToggle').on("click", function (e) {
                $(this).next('ul').toggle();
                $(this).toggleClass('dropdownToggle--is-active');

                e.stopPropagation();
                e.preventDefault();
            });
            $('.navbar-nav > .nav-item > .nav-link').on("click", function (e) {
                $(".navbar").removeClass("active");
                $("body").removeClass("offcanvas--open");
                $(".navbar-toggler-icon").removeClass("active");
            });
        }
    }

    // arrow append
    $(".menu-item-has-children > a" ).after( '<span class ="dropdownToggle fa fa-caret-down" ></span>' );

    function navMenu() {

        // main menu toggleer icon (Mobile site only)
        $('[data-toggle="navbarToggler"]').on("click", function (e) {
            $('.navbar').toggleClass('active');
            $('.navbar-toggler-icon').toggleClass('active');
            $('body').toggleClass('offcanvas--open');
            e.stopPropagation();
            e.preventDefault();

        });
        $('.navbar-inner').on("click", function (e) {
            e.stopPropagation();
        });

        // Remove class when click on body
        $('body').on("click", function () {
            $('.navbar').removeClass('active');
            $('.navbar-toggler-icon').removeClass('active');
            $('body').removeClass('offcanvas--open');
        });


        // Navbar moved up
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky--moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky--moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky--transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky--transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky--on");
            } else {
                $stickyNav.removeClass("navbar-sticky--on");
            }

        });
    }
    navMenu();



    /* ---------------------------------------------
    smooth Scroll
    --------------------------------------------- */
    function smoothScroll() {
        $(".navbar .nav-item .nav-link, .smooth-scroll  a").on('click', function(event) {

           // Make sure this.hash has a value before overriding default behavior
           if (this.hash !== "") {
             // Prevent default anchor click behavior
             event.preventDefault();

             // Store hash
             var hash = this.hash;

             // Using jQuery's animate() method to add smooth page scroll
             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
             $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 1200, function(){

               // Add hash (#) to URL when done scrolling (default click behavior)
               window.location.hash = hash;
             });
           } // End if
         });
    }
    
    smoothScroll();

    /* ---------------------------------------------
    reveal
    --------------------------------------------- */
    function reveal() {

        window.sr = ScrollReveal();
        sr.reveal('.reveal', {
            duration: 1000,
            delay: 0,
            scale: 1,
            opacity: .2,
            easing: 'ease-in-out',
        });
    }

    reveal();

    /* ---------------------------------------------
    Language dropbown
    --------------------------------------------- */
    function languagedropbown() {
        var $landDropdown = $('.lang-dropdown');

        $(".lang-selector__button").on('click', function (e) {
            $landDropdown.slideToggle("fast");
            e.stopPropagation();
        });
        $(".lang-dropdown__item").on('click', function (e) {
            $landDropdown.hide();
            e.stopPropagation();
        });
        $("body").on('click', function () {
            $landDropdown.hide();
        });
    }
    languagedropbown();

    /*----------------------------------
        background image holder
    -----------------------------------*/
    function backgroundHolder() {
        $(".background-image-holder").each(function () {
            var thesrc = $(this).attr('src');
            $(this).parent().css("background-image", "url(" + thesrc + ")");
            $(this).parent().css("background-repeat", "no-repeat");
            $(this).hide();
        });

    }
    backgroundHolder();

    /* ---------------------------------------------
    Lightobx
    --------------------------------------------- */
    function lightBox() {
        $('.lightbox').venobox();
    }
    lightBox();

    /* ---------------------------------------------
    homepage-1 Features slider
    --------------------------------------------- */
    function featuresSlider1() {
        var $swipeTabsContainer = $('.swipe-tabs'),
            $swipeTabs = $('.swipe-tab'),
            $swipeTabsContentContainer = $('.swipe-tabs-container'),
            currentIndex = 0,
            activeTabClassName = 'active-tab';

        $swipeTabsContainer.on('init', function (event, slick) {
            $swipeTabsContentContainer.removeClass('invisible');
            $swipeTabsContainer.removeClass('invisible');

            currentIndex = slick.getCurrent();
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
        });

        $swipeTabsContainer.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            touchThreshold: 10,
        });

        $swipeTabsContentContainer.slick({
            asNavFor: $swipeTabsContainer,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            draggable: false,
            touchThreshold: 10,
        });


        $swipeTabs.on('click', function (event) {
            // gets index of clicked tab
            currentIndex = $(this).data('slick-index');
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
            $swipeTabsContainer.slick('slickGoTo', currentIndex);
            $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
        });

        //initializes slick navigation tabs swipe handler
        $swipeTabsContentContainer.on('swipe', function (event, slick, direction) {
            currentIndex = $(this).slick('slickCurrentSlide');
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
        });
    }
    featuresSlider1();

    /* ---------------------------------------------
    Features homepage-2 slider
    --------------------------------------------- */
    function featuresSlider2() {
        $(".features--slider-2 .slider-tabs").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.features--slider-2 .slider-contents',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]

        });
        $(".features--slider-2 .slider-contents").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            asNavFor: '.features--slider-2 .slider-tabs',
            prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-triangle-left-18 icon-color-white"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon icon-triangle-right-17 icon-color-white"></i></button>',
        });

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(e.target).find('.slider').each(function () {
                $(this).slick('setPosition');
            })
        })
    }
    featuresSlider2();

    /* ---------------------------------------------
    Pricing data update
    --------------------------------------------- */
    function pricingData() {
        var cardValue = $('.card__value');
        var cardValueFocused = $('.card__value--focused');

        $(".pricing-tab .btn").on('click', function () {
            $('.pricing-tab .btn').removeClass('btn--bg-primary');
            $(this).addClass("btn--bg-primary");
        });
        $(".data-type-monthly").on('click', function () {
            cardValue.fadeIn("fast");
            cardValueFocused.css('display', 'none');
        });
        $(".data-type-yearly").on('click', function () {
            cardValue.css('display', 'none');
            cardValueFocused.fadeIn("fast");
        });
    }
    pricingData();

    /* ---------------------------------------------
    testimonial carousel
    --------------------------------------------- */
    function testimonialCarousel1() {

        $(".testimonial-carousel .testimonial-content").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.testimonial-carousel .testimonial-image',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,

        });
        $(".testimonial-carousel .testimonial-image").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            asNavFor: '.testimonial-carousel .testimonial-content',
            dots: true,
            customPaging: function (slider, i) {
                return '<button class="slick-dots--long" id=' + i + "></button>";
            },

            arrows: false,
        });

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(e.target).find('.slider').each(function () {
                $(this).slick('setPosition');
            })
        });
    }
    testimonialCarousel1();

    /* ---------------------------------------------
    Fixed Footer
    --------------------------------------------- */
    function csselem() {
        jQuery(".height-emulator").css({
            height: jQuery(".footer--fixed").outerHeight(true)
        });
    }
    csselem();
    var jQuerywindow = jQuery(window);
    jQuerywindow.resize(function () {
        csselem();
    });
    /* ---------------------------------------------
    CountDown
    --------------------------------------------- */
    function countDown() {
        var second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        var xPdate = $("#date").data("date");
        var countDown = new Date(xPdate).getTime(),
            x = setInterval(function () {
                var now = new Date().getTime(),
                    distance = countDown - now;
                var cDays = document.getElementById("days");
                if (cDays) {
                    (document.getElementById("days").innerText = addZero(Math.floor(distance / day)),
                        (document.getElementById("hours").innerText = addZero(Math.floor(
                            (distance % day) / hour
                        ), 2))),
                    (document.getElementById("minutes").innerText = addZero(Math.floor(
                        (distance % hour) / minute
                    ), 2)),
                    (document.getElementById("seconds").innerText = addZero(Math.floor(
                        (distance % minute) / second
                    ), 2));
                }
            }, second);
    }

    function addZero(your_number, length) {
        var num = '' + your_number;
        while (num.length < length) {
            num = '0' + num;
        }
        return num;
    }
    countDown();
    /* ---------------------------------------------
    Preloaded
    --------------------------------------------- */
    $(window).on("load", function () {
        $('.preloader-wapper').addClass('loaded');
        if ($('.preloader-wapper').hasClass('loaded')) {
            $('.preloader-main').delay(1200).queue(function () {
                $(this).remove();
            });
        }
    });

})(jQuery);
