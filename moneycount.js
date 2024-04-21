const sum = 2000;

const note1=2000;
const note2=500;
const note3=200;
const note4=100;
const note5=50;
const note6=20;
const note7=10;
const coin1=5;
const coin2=2;

const countNotes = sum => {
   let count = 0;
   
   while(sum){
      if(sum >= note1){
         sum -= note1;
         count++;
         continue;
        
      }else if(sum >= note2){
         sum -= note2;
         count++;
         continue;
      }else if(sum >= note3){
         sum -= note3;
         count++;
         continue;
      }else if(sum >= note5){
         sum -= note5;
         count++;
         continue;
      }else if(sum >= note6){
         sum -= note6;
         count++;
         continue;
      }else if(sum >= note7){
         sum -= note7;
         count++;
         continue;
      }else if(sum >= coin1){
         sum -= coin1;
         count++;
         continue;
      }else if(sum >= coin2){
         sum -= coin2;
         count++;
         continue;
      }else{
         sum -= 1;
         count++;
         continue;
      }
   };
   return count;
};
console.log("Total Count Of Denominations",countNotes(sum));