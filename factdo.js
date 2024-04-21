// Writeb a javascript program to calculate of factorial of given number usind Do while loop.
let num=5;
let fact=1;
let i=1;

do{
    fact=fact*i;
    i++;
}while(i<=num);

console.log("factorial of number is",fact);