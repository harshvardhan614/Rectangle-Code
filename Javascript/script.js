
// Navigation Bar 
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=> {
        navbar.classList.add('active');
        console.log("clicked");
    })
}

if(close){
    close.addEventListener('click', ()=> {
        navbar.classList.remove('active');
        console.log("clicked");
    })
}

$(document).ready(function () {
  $(window).scroll(function () {    
    if (this.scrollY > 2000) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(" .scroll-up-btn").removeClass("show");
    }
  });
});
// slide up button 
 //slide-up script
 $('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop:0});
});


//technoloies part
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// FAQ part 
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) =>{
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('active');
        console.log("clicked");
    })
});

//Projects
$(function () {
    $("#project-part").owlCarousel({
      margin:20,
      items: 1,
      autoplay: true,
      smartSpeed: 800,
      loop: true,
      autoPlayHoverPause: true,
    });
  });


// testimonials scritpt 
$(window).on('load', function () {
    $("#customers-testimonial").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 800,
      loop: true,
      autoPlayHoverPause: true,
    });
  });


  