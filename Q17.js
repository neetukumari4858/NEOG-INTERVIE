var forNews=document.querySelector("#inp");
var forSource=document.querySelector("#inp");

var btn1=document.querySelector("#btn");
var output1=document.querySelector("#output");



function add(){
    if (forSource.value==="Facebook" || forSource.value==="Whatapp"){
        output1.innerText="Don't believe things on FB and Whatsapp"
    }else{
        output1.innerText="your source is good";
    }
}
btn1.addEventListener("click",add);
