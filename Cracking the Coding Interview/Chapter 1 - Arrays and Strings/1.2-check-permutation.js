/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

Input: 'hello', 'elloh'
Output: true

Input: '', 'hi'
Output: false

Assumptions:
  - can be duplicate letters
  - white space is important
  - capitalization matters
  
Approaches:
  1. Count the number of symbols in each and see if they are the same.
  Time: O(n + m + n1 + m1) Space: O(n + m)
  
*/
'use strict';

console.log(isPermutation('ih', 'hi'));

function isPermutation(s1, s2) {
  
  if (s1.length !== s2.length) return false;
  
  let histogram1 = {};
  let histogram2 = {};
  
  s1.split('').forEach(letter => {
    if (histogram1[letter]) {
      histogram1[letter] = histogram1[letter] + 1;
    } else {
      histogram1[letter] = 1;
    }
  });
  
  s2.split('').forEach(letter => {
    if (histogram2[letter]) {
      histogram2[letter] = histogram2[letter] + 1;
    } else {
      histogram2[letter] = 1;
    }
  });
  
  for (let letter of s1) {

    let count1 = s1[letter];
    let count2 = s2[letter];
    if (count1 !== count2) {
      return false;
    }
    
  }

  return true;
  
}