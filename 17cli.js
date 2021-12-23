var readlineSync=require("readline-sync");
var news=readlineSync.question("enter any news:-");
var source=readlineSync.question("enter any source:-");
function add(){
    if (source==="Facebook" || source==="Whatapp"){
        console.log("Don't believe things on FB and Whatsapp");
    }else{
        console.log("your source is good");
    }
}
add()