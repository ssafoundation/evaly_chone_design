$(document).ready(function () {
    $(".hero_slider_items").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,

    });
    $(".express_items_wrap").owlCarousel({
        loop: true,
        items: 7,
        margin: 15,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            575: {
                items: 3,
                nav: true
            },
            768: {
                items: 4,
                nav: true
            },
            992: {
                items: 5,
                nav: true,
                loop: false
            },
            1100: {
                items: 6,
                nav: true,
                loop: false
            },
            1200: {
                items: 7,
                nav: true,
                loop: false
            },
            1320: {
                items: 8,
                nav: true,
                loop: false
            }
        }
    });
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".header-main-area").removeClass("scroll-header");
        } else {
            $(".header-main-area").addClass("scroll-header");
        }
    });
    $(".category_btn").click(function () {
        $(".main_navbar_wrap").animate({
            width: "toggle"
        });
    }); 
    var boxWidth = $(".box").width();
    $(".responsive_toggle_btn").click(function () {
        $(".main_navbar_wrap").animate({
            width: "toggle"
        });
    });
    var boxWidth = $(".box").width();
    $(".navbar_toggle_bg").click(function () {
        $(".main_navbar_wrap").animate({
            width: "toggle"
        });
    });

    $(".header_right_toggle_btn").click(function () {
        $(".header_bottom_navbar_right").fadeToggle('slow');
    });
});