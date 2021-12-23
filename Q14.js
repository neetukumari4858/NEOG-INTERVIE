var ob1 = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
};
var ob2 = {
    name: "krishna",
    age: 31,
    yuga: "Dwaper"
};
function object1() {
    if (ob1["age"] > ob2["age"]) {
      console.log("Ram");
    } else {
      console.log("krishna");
    }
}
object1();
  