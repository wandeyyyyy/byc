

const words = ["Men","Women","Kids","Yourself"];

let currentWordIndex = 0;
const textElement =  document.getElementById("rotatingHeading");

function rotateWord(){
   textElement.textContent = words[currentWordIndex];
   currentWordIndex = (currentWordIndex + 1) % words.length;
}

rotateWord();
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

// product dropdown
  document.addEventListener("DOMContentLoaded", function() {
    let dropdownMenu = document.querySelector('.dropdown-mainmenu');

    // Prevent the dropdown from closing when clicking inside it
    dropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});


// search button
function showSearch(event) {
  event.preventDefault();
  const getSearch = document.querySelector(".has-search");
  const getLogo = document.querySelector(".byclogo");
  const searchIcon = document.querySelector(".si");
  getSearch.style.display = "block";
  searchIcon.style.display = "none";
  getLogo.style.display = "none"
}
function hideSearch(event) {
  event.preventDefault();
  const getSearch = document.querySelector(".has-search");
  const getLogo = document.querySelector(".byclogo");
  const searchIcon = document.querySelector(".sii");
  getSearch.style.display = "none";
  searchIcon.style.display = "block";
  getLogo.style.display = "block"
}
function showSmallSearch(event) {
  event.preventDefault();
  const search = document.querySelector(".form-groupsmall");
  const mobilenav = document.querySelector(".smallnav");

  search.style.display = "block";
  mobilenav.style.display = "none"
}

function closeSearch(event){
  event.preventDefault();
  const search = document.querySelector(".form-groupsmall");
  const mobilenav = document.querySelector(".smallnav");

  search.style.display = "none";
  mobilenav.style.display = "flex"
}
