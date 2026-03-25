$(".menu_toggle").click(function () {
    $(".menu").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
});


$('.featured_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',

    responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 650,
            settings: { slidesToShow: 1 }
        },
    ]
});