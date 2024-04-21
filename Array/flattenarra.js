// WAP for flattening array.
let nestedArray = [5,3,4,[1, 2], [3, 4], [5, 6]];
let flattenedArray = [];
for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    flattenedArray.push(nestedArray[i][j]);
  }
}

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]