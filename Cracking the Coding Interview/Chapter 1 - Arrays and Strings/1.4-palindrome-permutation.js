/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)

Assumptions:
  - Spaces do not matter
  - Only lowercase matters
  - Proper input
  
Approaches:
  1. Count number of unique symbols (and locations of spaces). If two odd numbers exist return false, else print every permutation.
  {
  t: 2
  a: 2
  c: 2
  o: 1
  }
  
  taco cat, atco cta, ctao atc, ...  
*/
'use strict';

console.log(isPalindromePermutation('Tact Coa'));

function isPalindromePermutation(s) {
  
  s = s.toLowerCase();
  
  let histogram = {};
  
  s.split('').forEach(letter => {
    if (letter !== ' ') {
      
      if (histogram[letter]) {
        histogram[letter] = histogram[letter] + 1;
      } else {
        histogram[letter] = 1;
      }
      
    }
  });
    
  let foundOdd = false;
  for (let letter in histogram) {
    let count = histogram[letter];
    
    if (count % 2 !== 0) {
      if (foundOdd) return false;
      foundOdd = true;
    }
  }
  
  return true;
  
}