let a = 12;
let isprime =true;
for(i = 2; i<a;i++){
    if(a%i==0){
        isprime = false;
        break;
    }
}
if(isprime){
    console.log("This is prime Number");
}
else{
    console.log("This is not prime Number");
}