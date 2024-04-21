// WAP in js to remove all the spaces from a string withou spilt.

let str ="ajit raut"
let removespaces="";
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        removespaces=removespaces + str[i];
    } 
}
console.log("String withou spaces look like this:",removespaces);
