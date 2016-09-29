/*
URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

Input:  "Mr John Smith    ", 13
Output: "Mr%20John%20Smith"

Assumptions:
  - 
  
Approaches:  
  1. Go from input number - 1 to 0. If char is space, insert %20 into array, else insert character.
  
*/
'use strict';

console.log(urlIfy('Mr John Smith    ', 13));

function urlIfy(s, n) {
  
  s = s.split('');
  
  let endIndex = s.length-1;
  
  for (let i = n - 1; i >= 0; i--) {
    
    if (s[i] === ' ') {
      s[endIndex] = '0';
      s[endIndex-1] = '2';
      s[endIndex-2] = '%';
      endIndex -= 3;
    } else {
      s[endIndex] = s[i];
      endIndex -= 1;
    }
    
  }
  
  return s.join('');
  
}