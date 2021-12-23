var Input=document.querySelector("#inp");
var button1=document.querySelector("#btn1");
var button2=document.querySelector("#btn2");
var output1=document.querySelector("#output")

function redColor(){
    output1.innerText=Input.value;
    output.style.color="red";
}


button1.addEventListener("click",redColor);
button2.addEventListener("click",blueColor);

// op.innerText = textArea1.value;
//   op.style.color = "green";