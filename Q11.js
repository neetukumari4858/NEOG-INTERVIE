var button1 = document.querySelector("#btn");
var password = document.querySelector("#input1");
var output1 = document.querySelector("#output");
button1.disabled=true;
function pass(){
  if (password.value.length>=10){
    button1.disabled=false;
    alert("sucess");
  }else{
    alert("failed");
    button1.disabled=true;
  }
}
button1.addEventListener(pass);
