//Array length
const cars=["bmw" ,"audi" ,"mg"];
console.log(cars.length);

//Find the element is existing in array or not
let arr=[1,2,3];
if(arr.indexOf(5) !== -1){
    console.log("true")
}else {
    console.log("false")
}

//Splice

let num=["A" ,"P" ,"L" ,"E"];
num.splice(2,0,'P');
console.log(num)

//slice
console.log(num.slice(1,4));

