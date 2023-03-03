let num = 97;
let Prime = true;
for(let i = 2; i < num; i++){
    if (num%i == 0){
        Prime = false;
        break;
    }    
}
if (Prime == true){
    console.log("This is Prime Number")
}else{
    console.log("This is not a Prime Number");
}