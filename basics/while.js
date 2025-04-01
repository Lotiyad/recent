let loggedIn = false;
let password;
let username;
while(!loggedIn){
  username = window.prompt("enter your username");
  password = window.prompt("enter your password");
 
  if(username === "myusername" && password === "mypassword" ){
    loggedIn = true;
    console.log("yo are logged in");
  }
  else{
    console.log("invalid credientials");
  }
  }