// Write a program in js to check if two strings are anagram or not
 
/*
bored, robed
night, thing
arc, car
*/
 
let s1 = "car", s2 = "rac";
 
if(s1.length !== s2.length) {
  console.log("They are not anagram");
}
else {
let count1 = [], count2 = [];
  for(let i=0;i<256;i++) {
    count1[i] = 0;
    count2[i] = 0;
  }
 
  for(let i=0;i<s1.length;i++) {
    let ch1 = s1.charCodeAt(i);
    let ch2 = s2.charCodeAt(i); // 110
    count1[ch1]++;
    count2[ch2]++;
  }
 
  let flag = true;
 
  for(let i=0;i<256;i++){
    if(count1[i] !== count2[i]) {
      console.log("They are not anagrams");
      flag = false;
      break;
    }
  }
 
  if(flag) {
    console.log("They are anagrams");
  }
  
}