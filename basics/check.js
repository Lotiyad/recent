const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");
mysubmit.onclick = function(){
  if(mycheckbox.checked){
    subresult.textContent = `you are subscribed!`;

  }
  else{
    subresult.textContent = `you are not subscribed!`;
  }
  if(visabtn.checked){
    payresult.textContent = `you re paying with visa!`;

  }
  else if(mastercard.checked){
    payresult.textContent = `you re paying with mastercard!`;

  }
  else if(paypal.checked){
    payresult.textContent = `you re paying with paypal!`;

  }
  else{
    payresult.textContent = `you must select the payment type!`;

  }
}