

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
    spaceBetween:20,
  grabCursor: true,
    // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
     },
     autoplay: {
     delay: 3000,
     pauseOnMouseEnter: true,
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

  // mother element dropdown
const dropdownBtn = document.getElementById('imgbtn');
const dropdownContent = document.getElementById('dropdown');

// children element dropdown
const productDropdown = document.querySelectorAll('.flexArr');
const productDrop = document.querySelector('.product-dropdown');



dropdownBtn.addEventListener('click', function(){
  dropdownContent.classList.toggle('show')
  productDrop.classList.remove('show');
})
productDropdown.forEach(function(element) {
  // Add a click event listener to each element
  element.addEventListener('click', function() {
    // Toggle the class 'show' on productDrop
    productDrop.classList.toggle('show');
  });
});