var Input=document.querySelector("#inp");
var button1=document.querySelector("#btn");
var output1=document.querySelector("#output");

function password(){
    if (Input.value.length>10){
        output1.innerText="success"
        output1.style.color="red";
    }else{
        output1.innerText="failed"
        output1.style.color="green";
    }
}
button1.addEventListener(password)