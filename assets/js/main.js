/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Hero-1 Slider Start <<//
        const sliderActive2 = ".hero-slider";
        const sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });
        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive2, sliderInit2);

         //>> Hero Slider Start <<//
         const sliderActive1 = ".hero-slider-2";
         const sliderInit1 = new Swiper(sliderActive1, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },

            pagination: {
                el: ".dot-2",
                clickable: true,
            },
             
         });
         // content animation when active start here
         function animated_swiper(selector, init) {
             let animated = function animated() {
                 $(selector + " [data-animation]").each(function () {
                     let anim = $(this).data("animation");
                     let delay = $(this).data("delay");
                     let duration = $(this).data("duration");
                     $(this)
                         .removeClass("anim" + anim)
                         .addClass(anim + " animated")
                         .css({
                             webkitAnimationDelay: delay,
                             animationDelay: delay,
                             webkitAnimationDuration: duration,
                             animationDuration: duration,
                         })
                         .one("animationend", function () {
                             $(this).removeClass(anim + " animated");
                         });
                 });
             };
             animated();
             init.on("slideChange", function () {
                 $(sliderActive1 + " [data-animation]").removeClass("animated");
             });
             init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);
       

        //>> Scroll Js Start <<//
        const scrollPath = document.querySelector(".scroll-up path");
        const pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        const updatescroll = function() {
            let scrolltotal = $(window).scrollTop();
            let height = $(document).height() - $(window).height();
            let scrolltotalheight = pathLength - (scrolltotal * pathLength) / height;
            scrollPath.style.strokeDashoffset = scrolltotalheight;
        };
        updatescroll();

        $(window).scroll(updatescroll);
        const offset = 50;
        const duration = 950;

        $(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".scroll-up").addClass("active-scroll");
            } else {
                jQuery(".scroll-up").removeClass("active-scroll");
            }
        });

        $(".scroll-up").on("click", function(event) {
            event.preventDefault();
            jQuery("html, body").animate({
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        if ($('.subscribe-popup').length) {
			const loginPopup = document.querySelector(".subscribe-popup");
			const close = document.querySelector(".close");
			
			window.addEventListener("load",function(){
			 showPopup();
			})
			function showPopup(){
					const timeLimit = 5
					let i=0;
					const timer = setInterval(function(){
					 i++;
					 if(i == timeLimit){
					clearInterval(timer);
					loginPopup.classList.add("show");
					 } 
					 console.log(i)
					},500);
			}
			close.addEventListener("click",function(){
				loginPopup.classList.remove("show");
			})
		}

        //>> Shop Slider Start <<//
        if($('.feature-product-slider').length > 0) {
            const featureProductSlider = new Swiper(".feature-product-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 4,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> testimonial Slider Start <<//
        if($('.testimonial-swiper').length > 0) {
        const testimonialSwiper = new Swiper(".testimonial-swiper", {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            
            });
        }

        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
                });
        }

        //>> Instagram Slider Start <<//
        const instagramBannerSlider = new Swiper(".instagram-banner-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                650: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Brand Slider Start <<//
        if($('.brand-slider').length > 0) {
            const brandSlider = new Swiper(".brand-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.brand-slider-2').length > 0) {
            const brandSlider2 = new Swiper(".brand-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // range sliger
        function getVals() {
            let parent = this.parentNode;
            let slides = parent.getElementsByTagName("input");
            let slide1 = parseFloat(slides[0].value);
            let slide2 = parseFloat(slides[1].value);
            if (slide1 > slide2) {
                let tmp = slide2;
                slide2 = slide1;
                slide1 = tmp;
            }

            let displayElement = parent.getElementsByClassName("rangeValues")[0];
            displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
        }

        window.onload = function() {
            let sliderSections = document.getElementsByClassName("range-slider");
            for (let x = 0; x < sliderSections.length; x++) {
                let sliders = sliderSections[x].getElementsByTagName("input");
                for (let y = 0; y < sliders.length; y++) {
                    if (sliders[y].type === "range") {
                        sliders[y].oninput = getVals;
                        sliders[y].oninput();
                    }
                }
            }
        }

        progressBar: () => {
            const pline = document.querySelectorAll(".progressbar.line");
            const pcircle = document.querySelectorAll(".progressbar.semi-circle");
            pline.forEach(e => {
                const line = new ProgressBar.Line(e, {
                    strokeWidth: 6,
                    trailWidth: 6,
                    duration: 3000,
                    easing: 'easeInOut',
                    text: {
                        style: {
                            color: 'inherit',
                            position: 'absolute',
                            right: '0',
                            top: '-30px',
                            padding: 0,
                            margin: 0,
                            transform: null
                        },
                        autoStyleContainer: false
                    },
                    step: (state, line) => {
                        line.setText(Math.round(line.value() * 100) + ' %');
                    }
                });
                let value = e.getAttribute('data-value') / 100;
                new Waypoint({
                    element: e,
                    handler: function() {
                        line.animate(value);
                    },
                    offset: 'bottom-in-view',
                })
            });
            pcircle.forEach(e => {
                const circle = new ProgressBar.SemiCircle(e, {
                    strokeWidth: 6,
                    trailWidth: 6,
                    duration: 2000,
                    easing: 'easeInOut',
                    step: (state, circle) => {
                        circle.setText(Math.round(circle.value() * 100));
                    }
                });
                let value = e.getAttribute('data-value') / 100;
                new Waypoint({
                    element: e,
                    handler: function() {
                        circle.animate(value);
                    },
                    offset: 'bottom-in-view',
                })
            });
        }

        const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });

        //>> Quantity Js Start <<//
        $(".quantity").on("click", ".plus", function (e) {
            let $input = $(this).prev("input.qty");
            let val = parseInt($input.val(), 10); // Specify base 10
            $input.val(val + 1).change();
        });

        $(".quantity").on("click", ".minus", function (e) {
            let $input = $(this).next("input.qty");
            let val = parseInt($input.val(), 10); // Specify base 10
            if (val > 0) {
                $input.val(val - 1).change();
            }
        });

        //>> Quantity Cart Js Start <<//
        let quantity = 0;
        let price = 0;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        $(".total-price, .product-pri").html(price.toFixed(2));
        $(".cart-increment, .cart-incre").on("click", function() {
            if (quantity <= 4) {
                quantity++;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-decrement, .cart-decre").on("click", function() {
            if (quantity >= 1) {
                quantity--;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-item-remove>a").on("click", function() {
            $(this).closest(".cart-item").hide(300);
        });

        //>> PaymentMethod Js Start <<//
        const paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
        $(".checkout-radio-single").on("click", function() {
            let paymentMethod = $("input[name='pay-method']:checked").val();
            $(".payment").html(paymentMethod);
        });

        //>> Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });

        //Quantity 
        const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
        const btnminus = document.querySelectorAll('.qtyminus');
        const btnplus = document.querySelectorAll('.qtyplus');

        if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

            inputs.forEach(function(input, index) {
                const min = Number(input.getAttribute('min'));
                const max = Number(input.getAttribute('max'));
                const step = Number(input.getAttribute('step'));

                function qtyminus(e) {
                    const current = Number(input.value);
                    const newval = (current - step);
                    if (newval < min) {
                        newval = min;
                    } else if (newval > max) {
                        newval = max;
                    }
                    input.value = Number(newval);
                    e.preventDefault();
                }

                function qtyplus(e) {
                    const current = Number(input.value);
                    const newval = (current + step);
                    if (newval > max) newval = max;
                    input.value = Number(newval);
                    e.preventDefault();
                }

                btnminus[index].addEventListener('click', qtyminus);
                btnplus[index].addEventListener('click', qtyplus);
            });
        }

        //>> CountDown Start <<//
        let targetDate = new Date("2024-07-12 00:00:00").getTime();
        const countdownInterval = setInterval(function () {
            let currentDate = new Date().getTime();
            let remainingTime = targetDate - currentDate;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                // Display a message or perform any action when the countdown timer reaches zero
                $("#countdown-container").text("Countdown has ended!");
            } else {
                let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                let hours = Math.floor(
                    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                let minutes = Math.floor(
                    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                );
                let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                // Pad single-digit values with leading zeros
                $("#day").text(days.toString().padStart(2, "0"));
                $("#hour").text(hours.toString().padStart(2, "0"));
                $("#min").text(minutes.toString().padStart(2, "0"));
                $("#sec").text(seconds.toString().padStart(2, "0"));
            }
        }, 1000);

        $(function() {
            $("#datepicker, #datepicker2, #datepicker3, #datepicker4, #datepicker5, #datepicker6, #datepicker7, #datepicker8, #datepicker9, #datepicker10, #datepicker11").datepicker({
                autoclose: true,
                todayHighlight: true
            });
        });


    }); // End Document Ready Function

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }
    loader();

    
})(jQuery); // End jQuery

