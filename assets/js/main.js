let navBtn = document.getElementById("nav-btn")
let icon = document.getElementById("icon")
let close = document.getElementsByClassName("fa-xmark")
let showNav = document.getElementById("navClick")
let prod = document.getElementById("prod")
let Brands = document.querySelectorAll(".Brands")


function changeIconBtn(){
    if(icon.className.includes("fa-bars-staggered"))icon.classList.replace("fa-bars-staggered" , "fa-xmark");
        else icon.classList.replace("fa-xmark" , "fa-bars-staggered");

}
function showLinks(){
    if(icon.className.includes("fa-xmark")){
        showNav.classList.replace("d-none" , "d-block")
    }else{
        showNav.classList.replace("d-block" , "d-none")
    }
}
navBtn.addEventListener("click" , function(){
    changeIconBtn()
    showLinks()
})

prod.addEventListener("click" ,function(){
        document.getElementById("product").classList.toggle("d-none")  
})

for(let i = 0; i < Brands.length ; i++){
 Brands[i].addEventListener("click" , function(){
        document.getElementById("cars").classList.toggle("d-none")
    })
}
    
   



$(document).ready(function(){
    $('.your-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
  fade: true,
  cssEase: 'linear',
  rtl: true,
  arrows: false  // أضف الأسهم إذا كنت بحاجة إليها

    });
  });
