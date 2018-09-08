
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
      timer: true,
      overlay: true,
      transition: 'fade',
      transitionDuration: 5000,
      slides: [
        { src: 'images/background-1.jpg' },
        { src: 'images/background-2.jpg' }
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

});