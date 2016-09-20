// Given a string, determine if it is a palindrom (ignore non alpha-numeric characters).
'use strict';

let result = isPalindrome('A man, a plan, a canal: Panama');

console.log('result: ' + result);

function isPalindrome(s) {
  
  let startIndex = 0;
  let endIndex = s.length - 1;
  
  let startChar, endChar;
  
  while (startIndex < endIndex) {
    
    startChar = s.charAt(startIndex);
    endChar = s.charAt(endIndex);
    
    if (!isAlphanumeric(startChar)) {
      startIndex += 1;
    } else if (!isAlphanumeric(endChar)) {
      endIndex -= 1;
    } else {
      
      if (startChar.toLowerCase() !== endChar.toLowerCase()) {
        return false;
      }
      
      startIndex += 1;
      endIndex -= 1;
      
    }
    
  }
  
  return true;
  
}

function isAlphanumeric(l) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  return alphabet.indexOf(l) >= 0;
}