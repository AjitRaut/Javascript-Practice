
let num = 100;
let flag;
 
for(let i=2; i<=Math.sqrt(num); i++) {
  if(num === i*i) {
    console.log("The number is not Sqaurerrot");
    flag = false;
    break;
  }
}
 
// In worst case: √n
 
if(flag !== false) {
  console.log("The number is Squareroot!");
}