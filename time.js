
let num = 1000000;
let isPrime;
 
for(let i=2; i<=Math.sqrt(num); i++) {
  if(num % i === 0) {
    console.log("The number is not prime");
    isPrime = false;
    break;
  }
}
 
// In worst case: √n
 
if(isPrime !== false) {
  console.log("The number is prime!");
}