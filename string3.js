// Write a program to remove nth character from a string.

let inputString = "ajit raut"
let indexToRemove = 5

let modifiedString = "";

for (let i = 0; i < inputString.length; i++) {
    if (i !== indexToRemove) {
        modifiedString += inputString[i];
    }
}

console.log("Resulting string after removing the character:", modifiedString);

