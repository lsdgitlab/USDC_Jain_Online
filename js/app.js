$(".rank-carousel.owl-carousel").owlCarousel({
    margin:0,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, 
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true, smartSpeed: 3000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:1,touchDrag:true,nav:false,dots:true},600:{items:2,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:4}}
})

// $(".learner-carousel.owl-carousel").owlCarousel({
//     margin:0, nav:false,
//     // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
//     dots:true,mouseDrag:true,touchDrag:true,
//     autoplay:true, autoplayTimeout:3000, autoplayHoverPause:true, smartSpeed: 5500,
//     // navContainer: '.top-highlights .custom-nav',
//     responsiveClass:true,responsive:{0:{items:1},768:{items:1},992:{items:1}}}); 

$(".learners-carousel.owl-carousel").owlCarousel({
    margin:0, nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:true,mouseDrag:true,touchDrag:true,
    // autoplay:true, autoplayTimeout:3000, autoplayHoverPause:true, smartSpeed: 5500,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:1},768:{items:2},768:{items:2},992:{items:3}}});    

$(".corporate-carousel.owl-carousel").owlCarousel({
    margin:0,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, 
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true, smartSpeed: 3000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:2,touchDrag:true,nav:false,dots:true},480:{items:3,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:5}}});    

$(".accredit-carousel.owl-carousel").owlCarousel({
    margin:0,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, smartSpeed: 2000,
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true, smartSpeed: 3000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:1,touchDrag:true,nav:false,dots:true},600:{items:3,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:4}}});

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
    
    // start script fot tabbing
    $('.cat-list li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.cat-list li').removeClass('current');
        $('.accord-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    // end script for tabbing

    
//start script for accordian 
$(function() {
    $('.accordtitle').click(function(j) {
  
      var dropDown = $(this).closest('.accordbx').find('.accorddesc');
      $(this).closest('.accord').find('.accorddesc').not(dropDown).slideUp();
  
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).closest('.accord').find('.accordtitle.active').removeClass('active');
        $(this).addClass('active');
      }
  
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  });
  //end script for accordian

})

$('.enquire-now a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 97
    }, 600);
    return false;
});


$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
        $("#text").slideUp();
      }
    });
  });
 