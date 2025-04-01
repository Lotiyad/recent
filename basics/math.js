
const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const mylabel1 = document.getElementById("mylabel1");
const min = 1;
const max = 6;
let randomNum;
let randomNum1;
mybutton.onclick = function(){
  randomNum = Math.floor(Math.random() * max) + min;
  randomNum1 = Math.floor(Math.random() * max) + min;
  mylabel.textContent = randomNum;
  mylabel1.textContent = randomNum1;
}