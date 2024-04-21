let num = 17; 

if (num <= 0) {
    console.log(num + " is not a power of two."); // Negative numbers and zero are not powers of two
} else {
    if ((num & (num - 1)) === 0) {
        console.log(num + " is a power of two.");
    } else {
        console.log(num + " is not a power of two.");
    }
}