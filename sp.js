let n = 3;
let count = 1;

for (let i = 1; i <= n; i++) {
  let str = "";
  for (j = 1; j <= n-i; j++) {
    str = str + " ";
  }
  for (k = n; k<=count; k--) {
    str = str + "*";
  }
  count -= 2;
  console.log(str);
}
