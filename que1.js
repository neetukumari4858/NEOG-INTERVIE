var input1 = document.querySelector("#inp1");
var input2 = document.querySelector("#inp2");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var output1 = document.querySelector("#output");

function operation1() {
  output1.innerText = Number(input1.value) + Number(input2.value);
}
function operation2() {
  output1.innerText = Number(input1.value) - Number(input2.value);
}
function operation3() {
  output1.innerText = Number(input1.value) * Number(input2.value);
}
function operation4() {
  output1.innerText = Number(input1.value) / Number(input2.value);
}
button1.addEventListener("click", operation1);
button2.addEventListener("click", operation2);
button3.addEventListener("click", operation3);
button4.addEventListener("click", operation4);
