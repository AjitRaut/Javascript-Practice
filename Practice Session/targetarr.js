// // Given an array of integers arr  and an integer target, return indices of the two numbers such that they add up to target.
 
// input : [16, 8, 23, 4, 15];
// output [3, 4]

function twoSum(arr , target) {
    
    for (let i = 0; i < arr .length; i++) {
        // Calculate the complement of the current number
        var  complement = target - arr [i];
        
        // Check if the complement exists in the rest of the array
        for (let j = i + 1; j < arr .length; j++) {
            if (arr [j] === complement) {
                // If it does, return the indices of the current number and its complement
                return [i, j];
            }
        }
    }
    
    // If no solution is found, return an empty array
    return [];
}

var  arr = [2, 7, 11, 15];
var  target = 17;
console.log(twoSum(arr , target)); // Output should be [0, 1]