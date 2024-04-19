$(document).ready(function(){
    $('.slide').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        dotsClass: 'slide-dots',
        fade: true,
        speed: 5000,
        accessibility: false,
        swipe: false,
    });
});