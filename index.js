const words = ["Men","Women","Kids","Yourself"];

let currentWordIndex = 0;
const textElement =  document.getElementById("rotatingHeading");

function rotateWord(){
   textElement.textContent = words[currentWordIndex];
   currentWordIndex = (currentWordIndex + 1) % words.length;
}

rotateWord() ;
setInterval(rotateWord, 2000);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    //  direction: 'vertical',
    loop: true,
  spaceBetween:32,
  grabCursor: true,
    // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
     },
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
breakpoints: {
    600:{
        slidesPerView: 2,
    },
    1200:{
        slidesPerView: 3,
    }
}
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });