/*
isPalindrome: Implement a recursive function that returns whether or not a string is a palindrome.
*/
'use strict';

console.log(isPalindrome('A man, a plan, a canal, -Panama'));

function isPalindrome(s) {

  if (s.length <= 1) return true;
  
  let first = s[0];
  let last = s[s.length - 1];
  
  if (isLetter(first) && isLetter(last)) {
    // both are letters
    
    if (first.toLowerCase() === last.toLowerCase()) return isPalindrome(s.substring(1, s.length - 1));
    else return false;    
    
  } else if (!isLetter(first)) {
    // first one isn't letter
    return isPalindrome(s.substring(1, s.length));
  } else {
    // last one isn't letter
    return isPalindrome(s.substring(0, s.length - 1));
  }
  
}

function isLetter(l) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.includes(l);
}