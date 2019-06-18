$(function(){

    $('.upload__wrapper input, .upload__wrapper select').styler();

    $('.slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: true
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        grid: false,
        prefix: "$",
        skin: "round"
    });

    var mixer = mixitup('.portfolio__content');
});