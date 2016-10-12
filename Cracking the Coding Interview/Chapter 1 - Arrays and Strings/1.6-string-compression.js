/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

I: ''
O: ''

I: 'a'
O: 'a'

I: 'ab'
O: 'ab'

I: 'aab'
O: 'aab'

I: 'aaab'
O: 'a3b'

Assumptions:
	- uppercase & lowercase are treated equally
  - return ONLY if compressed string is shorter

Approaches:
	1. aabcccccaaa
		compressedStr = '';
		prevLetter = str[0];
    count = 0;
    loop from 1 to str.length;
    return shorter str;
    
  2. a2b1c5a3
  
*/

console.log(getCompressedString('aabcccccaaa'));

function getCompressedString(str) {

	let compressedStr = '';
  let prevLetter = str[0];
  let count = 1;
  
  for (let i = 1; i < str.length; i++) {
  	
    let currentLetter = str[i];
    
    if (prevLetter === currentLetter) {
	    count += 1;
      if (i === str.length-1) compressedStr += prevLetter + count;
    } else {
    	compressedStr += prevLetter + count;
      prevLetter = currentLetter;
      count = 1;
    }
    
  }
  
  return compressedStr.length < str.length ? compressedStr : str;

}