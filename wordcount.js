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
