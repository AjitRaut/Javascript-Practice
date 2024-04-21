// WAP in js using any loop of you choice to reverse number.
let num=2002;
let reverse=0;
let remainder;

while(num>0){
    remainder=num%10;
    reverse=reverse*10+remainder;
    num=Math.floor(num/10);
}
console.log("reverse number is:",reverse);