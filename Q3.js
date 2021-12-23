var textArea=document.querySelector("#inp");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var output1 = document.querySelector("#output");


function heading1(){
  textArea.style.fontSize="90px";

}
function heading2(){
  textArea.style.fontSize="50px";
  
}
function heading3(){
  textArea.style.fontSize="20px";
}

button1.addEventListener("click", heading1); 
button2.addEventListener("click", heading2); 
button3.addEventListener("click", heading3); 
