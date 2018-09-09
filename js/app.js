
/* 
 * Pre loader
 */
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(document).ready(function() {

  /* 
   * Home Slideshow Vegas
   */
  $(function() {
    $('body').vegas({
      preload: true,
      overlay: 'img/overlay.png',
      transitionDuration: 1000,
      delay: 10000,
      slides: [
        { src: 'img/background-1.jpg' },
        { src: 'img/background-2.jpg' }
      ],
    });
  });

  /* 
   * Back top
   */
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
  });
  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  });
      
  /* 
   * wow
   */
  new WOW({ mobile: false }).init();

  /*
   * Validate Form
   */
  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 1,
      },
      email: {
        required: true,
        email:true,
      },
      message: {
        required: true,
        minlength: 1,
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name must be at least 1 character long",
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      message: {
        required: "Please provide a message",
        minlength: "Your message must be at least 1 character long",
      },
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});