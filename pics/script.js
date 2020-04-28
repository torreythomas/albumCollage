let gallery = document.querySelector(".gallery");

let galleryItems = gallery.querySelectorAll(".js-gallery-item")

console.log(galleryItems);


let slideCount = galleryItems.length;
let slideWidth = galleryItems[0].getBoundingClientRect().width;

console.log(slideWidth)

let currentSlide = 1;
let delta = -slideWidth * currentSlide;
console.log(currentSlide)
console.log(delta)

setInterval(function transitionSlide(){ 
  let delta = -slideWidth * currentSlide;
  if(currentSlide < slideCount){
    gallery.style.transform = `translateX(${delta}px)`;
    currentSlide++
    console.log("called")
  }else {
    gallery.style.transform = "translateX(0)";
    currentSlide = 1
  }
}, 5000);