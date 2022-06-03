window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
const scrollContainer = document.querySelectorAll('.scroll-container');
const scrollLeftContainer = document.querySelectorAll('.scroll-container-left')[0];
const scrollRightContainer = document.querySelectorAll('.scroll-container-right')[0];
window.addEventListener('load', () => {
  
  console.log('All assets are loaded');
  
    let loading = setTimeout(function(){
    let videoContainer = document.getElementsByClassName('inner-content-wrapper')[0];
    let outerVideoContainer = document.getElementsByClassName('frame');
      let navbarToggle = document.getElementsByClassName('navbar-toggle')[0];
      let socialMedia = document.getElementsByClassName('social-media')[0];
      let navbarBrand = document.getElementsByClassName('navbar-brand')[0];
      console.log(videoContainer);
    
    videoContainer.classList.add('content-loading-done');
      navbarToggle.classList.add('move-in-from-left');
      socialMedia.classList.add('move-in-from-right');
      navbarBrand.classList.add('move-in-from-top');
    outerVideoContainer[0].classList.add('frame-loading-done-left-right');
      outerVideoContainer[1].classList.add('frame-loading-done-left-right');
      outerVideoContainer[2].classList.add('frame-loading-done-up-down');
      outerVideoContainer[3].classList.add('frame-loading-done-up-down');

      const helloLogo = document.getElementsByClassName('hello-logo')[0];
      const helloLogoRect = document.querySelectorAll('.hello-logo rect');
      const helloLogoPath = document.querySelectorAll('.hello-logo path');
      const helloLogoEllipse = document.querySelectorAll('.hello-logo ellipse');
      
for(let i = 0; i < helloLogoRect.length; i++){

  console.log(`Letter ${i} is ${helloLogoRect[i].getTotalLength()}`);
  helloLogoRect[i].classList.add('hello-ready');
}
      helloLogoPath[0].classList.add('hello-ready');
  helloLogoEllipse[0].classList.add('hello-ready');
      scrollContainer[0].classList.add('hello-ready');
      
    }, 1000);
  
  window.onscroll = function changeClass(){
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    let helloWrapper = document.getElementsByClassName('hello-wrapper')[0];
    let innerContentWrapper = document.getElementsByClassName('inner-content-wrapper')[0];
    if(scrollPosY > 0) {
          
      helloWrapper.classList.add('hello-wrapper-onscroll');
      innerContentWrapper.classList.add('inner-content-wrapper-scroll');
      
      scrollContainer[0].classList.remove('hello-ready');
      scrollContainer[0].classList.add('scrolled');
      scrollLeftContainer.classList.add('scrolled');
      scrollRightContainer.classList.add('scrolled');
      let scrollHeight = document.body.scrollHeight;
      let totalHeight = window.scrollY + window.innerHeight;

      if(totalHeight >= scrollHeight)
      {
        scrollLeftContainer.classList.remove('scrolled');
        console.log('reached the bottom');
      }
    } else if(scrollPosY <= 0) {
         helloWrapper.classList.remove('hello-wrapper-onscroll');
      innerContentWrapper.classList.remove('inner-content-wrapper-scroll');
      scrollContainer[0].classList.remove('scrolled');
      scrollContainer[0].classList.add('hello-ready');
      scrollContainer[0].classList.add('after-hello-loaded');
      scrollLeftContainer.classList.remove('scrolled');
      scrollRightContainer.classList.remove('scrolled');
    }
}

});

 



$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slideInUp');
        $(this).css('opacity', '1');
      }
    });
    
  });
  $(".navbar-toggle").click(function(){
        $(".overlay").toggleClass('overlay-show');
       $('.frame').toggleClass('move-in-menu');
    $('.overlay-content-inner').toggleClass('show-content');
    $("body").toggleClass('fix-body-height');
     $(".overlay-colour").toggleClass('clicked');
    });

});