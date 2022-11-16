
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
      items: 1,
      autoplay: true,
      smartSpeed: 800,
      loop: true,
      autoPlayHoverPause: true,
    });
  });


// testimonials scritpt 
$(function () {
    $("#customers-testimonial").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 800,
      loop: true,
      autoPlayHoverPause: true,
    });
  });


  