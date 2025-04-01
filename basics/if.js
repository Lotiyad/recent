let mysubmit = document.getElementById("mysubmit");
let mylabel = document.getElementById("mylabel");
let myh3;
let myinput;
mysubmit.onclick = function(){
myinput = document.getElementById("myinput").value; 
if(myinput >= 18){
  myh3 = document.getElementById("myh3").textContent = "you are old enough!";
}
else{
  myh3 = document.getElementById("myh3").textContent = "you can't enter this site";
}
}