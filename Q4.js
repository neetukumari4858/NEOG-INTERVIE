var textArea1 = document.querySelector("#inp");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var op = document.querySelector("#output");

function colorch1() {
  op.innerText = textArea1.value;
  op.style.color = "red";
}
function colorch2() {
  op.innerText = textArea1.value;
  op.style.color = "green";
}
function colorch3() {
  op.innerText = textArea1.value;
  op.style.color = "blue";
}

button1.addEventListener("click", colorch1);
button2.addEventListener("click", colorch2);
button3.addEventListener("click", colorch3);


