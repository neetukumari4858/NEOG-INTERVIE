var readlineSync=require("readline-sync");
max=0
for (var i=0;i<3;i++){
    var name=readlineSync.question("Enter your name:-")
    var Ut=readlineSync.questionInt("Enter your unit test number:-")
    var PT=readlineSync.questionInt("Enter your pre test number:-")
    var FT=readlineSync.questionInt("Enter your final test number:-")
    var total=Ut+PT+FT;
    console.log(total,name)
    if (total>max){
        max=total
        l=`${max} ${name} got hightest marks`
    }
}
console.log(l)






