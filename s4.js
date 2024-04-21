// 4 WAP in js to check weather a number is power of two or not
let num = 16; // Example number
let isPowerOfTwo = true;

while (num > 1) {
    if (num % 2 !== 0) {
        isPowerOfTwo = false;
        break;
    }
    num /= 2;
}

if (isPowerOfTwo) {
    console.log("The number is a power of two.");
} else {
    console.log("The number is not a power of two.");
}
