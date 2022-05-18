    // Sidebar
    $('.menu-btn').click(function(){
      $('.side-bar').toggleClass('active');
  });
  
  //slidder//
  
  $('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 3,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav:true
      },
      768: {
        items: 1.4
      },
      1170: {
        items: 3
        
      }
    }
})
  
// slidder-2//
// slidder //
$(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').owlCarousel( {
      loop: true,
      center: false,
      items: 3,
      margin: 30,
      autoplay: true,
      dots:true,
      nav:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav:true
        },
        768: {
          items: 1.7
        },
        1170: {
          items: 4
          
        }
      }
    });
  });
  // hamp-burger//
  document.querySelector(".hamburger button").addEventListener("click", addActive)

function addActive(){
    let div1 = document.querySelector("nav");
    if(div1.classList.contains("active")){
        div1.classList.remove("active")
    } else{
        div1.classList.add('active');
    }
    let div2 = document.querySelector(".hamburger button");
    if(div2.classList.contains("active")){
        div2.classList.remove("active")
    } else{
        div2.classList.add("active");
    }
}

// slider-coustom //
