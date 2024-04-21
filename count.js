// write a program using while loop to calculate number of digits present in a number

let num=123;
let count=0;

if(num===0){
    count=1;
}
while(num >0){
    num=Math.floor(num/10);
    count++;
}
console.log("Number of digits present in given number are:",count)