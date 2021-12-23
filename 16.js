obj1={
    name:"Ram",
    age:19,
    power:2500,
    yuga:"treta"
}
obj2={
    name:"krishna",
    age:19,
    power:2325,
    yuga:"Dwaper"
}
var n=obj1.name.length
var c1=n*35+2500
var n=obj2.name.length
var c2=n*35+2325
function add(){
    if (c1>c2){
        console.log(`${obj1.name}'s power is greater`);
    }else{
       console.log(`${obj2.name}'s power is greater`);
    }
}
add()