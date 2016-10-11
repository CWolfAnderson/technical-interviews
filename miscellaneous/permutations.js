/*
Get Permutations: Write a function that returns all permutations of a given string.
*/

console.log(getPermutations('eat'));

function getPermutations(s) {
  
  let permutations = [];
  
  if (s.length === 0) {
    permutations.add(s);
    return permutations;
  } else {
    // loop through all character positions
    for (let i = 0; i < s.length; i++) {
      
      // form a shorter word by removing the ith character
      let shorter = word.substring(0, i) + word.substring(i + 1);
      
      
      
    }
  }
  
  return permutations;
  
}