

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


// // to pick a mother dropdown
// function motherDrop(dropNum){
//   let dropdowns = document.getElementsByClassName("product-dropdown")
//   for (let i = 0; i < dropdowns.length; i++) {
//     if (i + 1 !== dropNum) {
//       dropdowns[i].style.display = "none";
//     }
//   }
//   let currentDropdown = document.getElementsByClassName("product-dropdown" + dropNum);
//   if (currentDropdown) {
//     for (let i = 0; i < dropdowns.length; i++) {
//       let currentDropdown = dropdowns[i];
//       // Toggle the display property
//       if (currentDropdown.style.display === "none" || currentDropdown.style.display === "") {
//         currentDropdown.style.display = "block";
//       } else {
//         currentDropdown.style.display = "none";
//       }
//     }
 
//   }
// }




  // mother element dropdown
const dropdownBtn = document.getElementById('imgbtn');
const dropdownContent = document.getElementById("dropdown");

// children element dropdown
const productDropdown = document.querySelectorAll('.flexArr');
const productDrop = document.querySelector('.product-dropdown');
// men product dropdown
const menUndies = document.getElementById('imgbtn1');
const menUndiesDropdown = document.querySelector('.product-dropdown1');
// women product dropdown
const womenUndies = document.getElementById('imgbtn2');
const womenUndiesDropdown = document.querySelector('.product-dropdown2');




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

menUndies.addEventListener('click', function(){
menUndiesDropdown.classList.toggle('show')
});
womenUndies.addEventListener('click', function(){
womenUndiesDropdown.classList.toggle('show')
});

