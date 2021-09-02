// $(window).on('load', function () {
//     setTimeout(function () {
//         $(".uni-loader").addClass('uni-loader-hide');
//         setTimeout(function () {
//             AOS.init({
//                 duration: 1000,
//                 once: true,
//             });
//         }, 200);
//     }, 500);s
//     $(window).scrollTop(0);
// });
jQuery(document).ready(function ($) {
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('re-menu-open');
        $('html').toggleClass('re-body-menu-open');
    });
    AOS.init({
        offset: 60,
        once: false,
        duration: 800,
    });
    var swiper = new Swiper(".re-siper-blog", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });
    $('.re-readmore').click(function () {
        $('html').addClass('overflow-hidden');
    });
    $('.close').click(function () {
        $('html').removeClass('overflow-hidden');
    });
    $('.re-modal').keypress(function (event) {
        if (event.which == 27) {
            $('html').addClass('overflow-hidden');
            console.log("hiii");
        }

    });
});

