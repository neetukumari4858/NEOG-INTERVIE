var area = document.querySelector("#area");
var btn1 = document.querySelector("#button1");
var btn2 = document.querySelector("#button2");



var number = 32;
function func1(){
  number += 2;
  area.style.fontSize = number+"px";
}

function func2(){
  number -= 2;
  area.style.fontSize =number+"px";
}

btn1.addEventListener("click",func1)
btn2.addEventListener("click",func2)














// var number = 32;
// btn1.addEventListener("click", () => {
//   number += 2;
//   Area.value.style.fontsize = `${number}px`;
// });
// btn2.addEventListener("click", () => {
//   number -= 2;
//   Area.value.style.fontsize = `${number}px`;
// });