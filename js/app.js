$(".accredit-carousel.owl-carousel").owlCarousel({
    margin:0,autoplay:false,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, smartSpeed: 2000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:2,touchDrag:true,nav:false,dots:true},600:{items:3,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:4}}});