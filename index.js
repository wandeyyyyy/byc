const words = ["Men","Women","Kids","Yourself"];

let currentWordIndex = 0;
const textElement =  document.getElementById("rotatingHeading");

function rotateWord(){
   textElement.textContent = words[currentWordIndex];
   currentWordIndex = (currentWordIndex + 1) % words.length;
}

rotateWord() ;
setInterval(rotateWord, 2000);


// carousel
$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   dots: false,
   autoplay:true,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:1,
           nav:true
       },
       1000:{
        items:3,
        nav:true
    }
   }
})

