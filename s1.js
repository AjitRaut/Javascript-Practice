// 1)check if a string contains only digits.


let str = "12345a";
let digits = true;

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) < '0' || str.charAt(i) > '9') {
        digits = false;
        break;
    }
}
if (digits) {
    console.log("String contains only digits.");
} else {
    console.log("String does not contain only digits.");
}
