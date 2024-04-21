// to count number of vowels in string

let str = "Hello World";
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
    let vowels = str[i].toLowerCase();
    if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
        vowelCount++;
    }
}
console.log("Number of vowels:", vowelCount);