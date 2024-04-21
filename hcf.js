//Write a program in js to calculate the hcf of two numbers.

let hcf;
let num1=10;
let num2=35;

for(let i=1; i<=num1 && i<=num2; i++) {
    if(num1%i ===0 && num2%i ===0){
        hcf=i;
    }
}
console.log("hcf is",hcf);