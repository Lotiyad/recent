let radius;
let circumference;
const pi = 3.14;
document.getElementById("mysubmit").onclick = function(){
  radius = document.getElementById("myradius").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById("myh3").textContent = "circumference is " + circumference + "cm"
 console.log(circumference);
}