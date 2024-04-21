// Write a progarm to check a given year is is Leap year or not.
let a=2024;

if(a%4 === 0 || a%100!==0 || a%400===0){
    console.log(a,"It is a leap year")
}else{
     console.log(a,"is not a leap year")
}