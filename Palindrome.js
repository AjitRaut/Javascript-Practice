// WAP to check given string is palindrome.

let str="racecar";

    for(i=0;i<str.length/2;i++){
        if (str[i] !== str[str.length- 1 - i]) {
            console.log('It is not a palindrome');
        }
    }
    console.log("given string is palindrome");