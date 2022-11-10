console.log("hhh");

$(".rank-carousel.owl-carousel").owlCarousel({
    margin:0,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, 
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true, smartSpeed: 4000,
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
    autoplay:true, autoplayTimeout:3000, autoplayHoverPause:true, smartSpeed: 4000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:1,autoHeight: true},768:{items:2, autoHeight: false},992:{items:3}}});    

$(".corporate-carousel.owl-carousel").owlCarousel({
    margin:0,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, 
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true, smartSpeed: 4000,
    // navContainer: '.top-highlights .custom-nav',
    responsiveClass:true,responsive:{0:{items:2,touchDrag:true,nav:false,dots:true},480:{items:3,touchDrag:true,nav:false,dots:true},768:{items:3,touchDrag:true,nav:false,dots:true},800:{items:3,touchDrag:true,nav:false,dots:true},992:{items:5}}});    

$(".accredit-carousel.owl-carousel").owlCarousel({
    margin:0,nav:false,
    // navText:["<img src='images/arrow-prev.png' alt='prev'>","<img src='images/arrow-next.png' alt='next'>"],
    dots:false,mouseDrag:true, smartSpeed: 2000,
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true, smartSpeed: 4000,
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
   //  $("#toggle").click(function() {
   //    var elem = $("#toggle").text();
   //    if (elem == "Read More") {
   //      //Stuff to do when btn is in the read more state
   //      $("#toggle").text("Read Less");
   //      $("#text").slideDown();
   //    } else {
   //      //Stuff to do when btn is in the read less state
   //      $("#toggle").text("Read More");
   //      $("#text").slideUp();
   //    }
   //  });

  //  $(".toggle").click(function() {
  //     $(this).prev().toggle();
  //     var elem = $(this).text();
      
  //     if (elem == "Read More") {
  //       //Stuff to do when btn is in the read more state
  //       $(elem).text("Read Less");
  //     } else {
  //       //Stuff to do when btn is in the read less state
  //       $(elem).text("Read More");
  //     }
  //   });

  $(".toggle").click(function () {
    $(this).prev().toggle();    
    if ($(this).text() == 'Read More') {
      $(this).text('Read Less');
    }
    else {
      $(this).text('Read More');
    }
  });

  });

  // script for left right scroll on mobile view 
  function sideScroll(element,direction,step){
    if(direction == 'left'){
        element.scrollLeft -= step;
    } else {
        element.scrollLeft += step;
    }
  }
  function scrollbtn(id, direction){
    var container = document.getElementById(id);
    sideScroll(container,direction,100);
  }
  // var position = $(".tab-section .cat-list li.current").position();
  // var elwidth = $(".tab-section .cat-list li.current").outerWidth();
  // sideScroll(document.getElementById('Tabs'),'right', (position.left- (elwidth/2)-6))
  // end script for left right scroll on mobile 

  // form validation
  const labels = document.querySelectorAll('.form-control label');
  labels.forEach( inptlabel =>{
          
          inptlabel.innerHTML = inptlabel.innerText
                  .split('')
                   .map( (letters, ind) => `<span style="transition-delay:${ind * 50}ms">${letters}</span>`)
                  .join('')
          // console.log(inptlabel); 
  });
  
  // Method 1
  
  let form = document.getElementById('form'); 
  let fanme = document.getElementById('fname');
  let mobile = document.getElementById('mblno');
  let email = document.getElementById('emailid');
  var ctselInx = document.getElementById('citydrpdwn')
  var prselInx = document.getElementById('prodrpdwn')
  
  
  form.addEventListener('click', (eve)=>{
      eve.preventDefault();
      checkInputs();  
      
  });
  
  form.addEventListener('input', (e)=>{
          e.preventDefault()
        inputType();
  });
  
  function inputType(){
          
  }
  
  
  
  function checkInputs() {
          const fanmeVal = fanme.value.trim();
          const mobileVal = mobile.value.trim();
          const emailVal = email.value.trim();
          var ctselInxVal = ctselInx.value;        
          var prselInxVal = prselInx.value;
          fanme.addEventListener("keyup", (e)=>{
           //    console.log("test");
           var char = /[^a-zA-Z]/g;
           if(/[^a-zA-Z]/g){
              fanme.value = fanme.value.replace(char, "");
              setErrorFor(fanme, 'Please Enter Letters Only')  
           }   
        })
       if(fanmeVal === '' || fanmeVal.length <= 2){
          setErrorFor(fanme, 'Please Enter The First Name')
       } else{
          setSuccessFor(fanme)
       }
  
       if(mobileVal === '' || mobileVal.length < 10){
        setErrorFor(mobile, 'Please Enter valid Mobile Number')
        } else{
           setSuccessFor(mobile)
        } 
  
     mobile.addEventListener("keyup", (e)=>{
     //    console.log("test");
     var num = /[^0-9]/g;
     if(/[^0-9]/g){
        mobile.value = mobile.value.replace(num, "");
        setErrorFor(mobile, 'Please Enter Numbers Only')  
     }
  
     //    // var char = String.fromCharCode(e.which)
     //    // if(!(/[0-9]/.test(char))){
     //    //    setErrorFor(mobile, 'Number')
     //    //    e.preventDefault
     //    // }
     })
  
       if(emailVal === ''){
          setErrorFor(email, 'Blank mail ID')
       } else if(!validateEmail(emailVal)){
          setErrorFor(email, 'Please Enter valid Email Id')
       } else{
          setSuccessFor(email)
       } 
       
       if(prselInxVal == "Select Pragram"){
          // console.log("Programm ==>");
          setErrorFor(prselInx, 'Please The Programme')
       } else{
          setSuccessFor(prselInx)
       }
       if(ctselInxVal == "Select City"){
          setErrorFor(ctselInx, 'Please Select The City');
          // console.log("CIty ==>");
       }else{
          setSuccessFor(ctselInx)
       }
  
  }
  
  function setErrorFor(input, msg) {
     const formCntrl = input.parentElement;
     const bElement = formCntrl.querySelector('b');
  //    console.log(bElement);
     bElement.innerText = msg;
     formCntrl.children[0].classList.add('errorbg');
  }
  
  function setSuccessFor(input){
     const formCntrl = input.parentElement;
     const bElement = formCntrl.querySelector('b');
     bElement.innerText = '';
     formCntrl.children[0].classList.remove('errorbg')
  
  }
  
  const validateEmail = (email1) => {
     return String(email1)
       .toLowerCase()
       .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );
  };


//script for tabs as accordian on moible
  tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from 
portrait mode to landscape). We set a timer with a small delay to run 
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/
var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if 
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your 
device from portrait mode to landscape).
*/
function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if(tabs.is(':visible')) {
    tabs.find('a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href'),
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.tab-item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
    });
  } else {
    $('.tab-item').on('click', function() {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.tab-item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
    });
  } 
}

 