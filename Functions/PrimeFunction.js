// prime number using function 1 to 100.
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}