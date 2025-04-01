let age = 26;
let message  = age >= 18? "you are an adult" : "you are under age";
console.log(message);
let purchase = 90;
let discount = purchase >= 100? 10 : 0;
console.log(`your total is $${purchase - purchase*discount/10 }`);