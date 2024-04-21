// // // // // WAP in js to capitaloxe all given that character in the string letters or space

// // // // let string="india";

// // // // for(let i=0;i<string.length-1;i+2){
// // // //  console.log(string.charCodeAt(i).toUppercase());
// // // // }
// // // let string = "india";
// // // let result = "";

// // // for (let i = 0; i < string.length; i++) {
// // //   if (i % 2 === 0) {
// // //     result += string[i].toUpperCase();
// // //   } else {
// // //     result += string[i];
// // //   }
// // // }

// // // console.log(result);
// // // Write a program to remove nth character from a string
// // let inputString = "ajit raut"
// // let indexToRemove = 5

// // let modifiedString = "";

// // for (let i = 0; i < inputString.length; i++) {
// //     if (i !== indexToRemove) {
// //         modifiedString += inputString[i];
// //     }
// // }

// // console.log("Resulting string after removing the character:", modifiedString);

// // WAP to check if a string contain even numbers od characts

// let str="ajit"

// if(str.length % 2===0){
//     console.log("it a even string")
// }else{
//     console.log("it a odd string")
    
// }

// count number of words
let str ="ajit raut hi"
let wordCount = 0;
let isWord = false;

for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        if (!isWord) {
            wordCount++;
            isWord = true;
        }
    } else {
        isWord = false;
    }
}

console.log("Number of words in the string:", wordCount);


