const words = ["Men","Women","Kids","Yourself"];

let currentWordIndex = 0;
const textElement =  document.getElementById("rotatingHeading");

function rotateWord(){
   textElement.textContent = words[currentWordIndex];
   currentWordIndex = (currentWordIndex + 1) % words.length;
}

rotateWord() ;
setInterval(rotateWord, 2000);



