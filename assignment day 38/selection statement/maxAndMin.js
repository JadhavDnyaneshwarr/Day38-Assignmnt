let num1 = Math.floor(Math.random() * 10) % 1000 + 99;
let num2 = Math.floor(Math.random() * 10) % 1000 + 99;
let num3 = Math.floor(Math.random() * 10) % 1000 + 99;
console.log(num1, num2, num3);
if(num1>num2 && num1>num3){
    console.log(num1 + " is the gretest among all")
}else if(num2>num1 && num2>num3){
    console.log(num2 + " is the gretest among all")
}else{
    console.log(num3 + " is the gretest among all")
}

if(num1<num2 && num1<num3){
    console.log(num1 + " is the smallest among all")
}else if(num2<num1 && num2<num3){
    console.log(num2 + " is the smallest among all")
}else{
    console.log(num3 + " is the smallest among all")
}