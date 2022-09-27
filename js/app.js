$(".rank-carousel.owl-carousel").owlCarousel({
    margin:0,autoplay:false,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, smartSpeed: 2000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:1,touchDrag:true,nav:false,dots:true},600:{items:2,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:4}}
})

$(".accredit-carousel.owl-carousel").owlCarousel({
    margin:0,autoplay:false,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, smartSpeed: 2000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:1,touchDrag:true,nav:false,dots:true},600:{items:3,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:4}}});

$(".corporate-carousel.owl-carousel").owlCarousel({
    margin:0,autoplay:false,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, smartSpeed: 2000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:2,touchDrag:true,nav:false,dots:true},480:{items:3,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:5}}});    

$(document).ready(function () {
    // start script to count the numbers from 0 to specific number 
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    // end script to count the numbers from 0 to specific number    

})

 