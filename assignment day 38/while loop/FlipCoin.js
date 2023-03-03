let head=0;
let tail=0;
while(head != 11 && tail != 11){
    let num = Math.floor(Math.random() * 10) % 2;
    if (num == 0){
        head++;
    }else{
        tail++;
    }
}
console.log(head, tail)
if(head == 11){
    
    console.log("Head Is Winner");
}
else{
    console.log("Tail is Winner");
}    
