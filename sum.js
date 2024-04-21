// Write a program in js to calculate the sum of the series 9+99+999+9999 .... n.
let num=9;
let r=5;
let sum=0;

for(i=1;i<=r;i++){
    sum+=num;
    console.log("series are",num)
    num=num*10+9;
}
console.log("sum of series is ",sum)
