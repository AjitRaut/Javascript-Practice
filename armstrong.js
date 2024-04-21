// Write a program to check whether a number is Armstrong or not.
let num=153;
let onum=num;
let result=0;
let reminder;

for(let i=0;i<num;){
    reminder= num % 10;
    result+= reminder * reminder * reminder;
    num = parseInt(num / 10);
}
if(onum==result){
    console.log("it is an Armstrong number");
}else{
    console.log("it is not an Armstrong number");
    
}