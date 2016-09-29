/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

Input: 'abcde'
Output: true

Input: 'abcdd'
Output: false

Assumptions:
  - only lowercase letters
  - length > 0
  
Approaches:
  1. Take each letter and check each subsequent letter to see if it already exists
  Without new data structure:
    Time: O(n^2) Space: O(1)
  With a new data structure:
    Time: O(n) Space: O(n)
  2. Count occurrances of each letter, if count exceeds 1 return false  
*/

'use strict';

let string = 'abcde';

console.log(isUnique(string));

function isUnique(s) {
  
  let set = new Set();
  
  for (let i = 0; i < s.length; i++) {
    
    let letter = s[i];
    
    if (set.has(letter)) return false;
    else set.add(letter);
    
  }
  
  return true;
  
}