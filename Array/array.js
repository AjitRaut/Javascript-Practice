// Write a program in js to input an array and remove duplicates from the array without using any other kind of data structure.
 
let arr=[1,2,3,4,5,3,2];
let newarr=[];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            newarr.push(arr[i]);
        }
    }
}

console.log(newarr);