var Text=document.querySelector("#inp");
var log=document.querySelector("#log");
var warm=document.querySelector("#warm");
var error=document.querySelector("#error");
var output=document.querySelector("#output1");

function blackColor(){
    output.innerText=Text.value
    output.style.color="black";
}
function yellowColor(){
    output.innerText=Text.value
    output.style.color="yellow";
}
function redColor(){
    output.innerText=Text.value
    output.style.color="red";
}

log.addEventListener("click",blackColor)
warm.addEventListener("click",yellowColor)
error.addEventListener("click",redColor)
