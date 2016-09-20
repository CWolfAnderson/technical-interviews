// Write the function countAdjacentSums(arr, n) which takes an array and number.
// It should count the number of times that two adjacent numbers in an array add up
// to n.
// 
// Use Array#forEach.
// 
// Examples:
// countAdjacentSums([1, 5, 1], 6) => 2
// countAdjacentSums([7, 2, 4, 6], 7) => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) => 3

function countAdjacentSums(arr, n) {
  
  let counter = 0;
  
  arr.forEach(function(num, i) {
    if (num + arr[i + 1] === n) {
      counter += 1;
    }
  });
  
  return counter;
}
