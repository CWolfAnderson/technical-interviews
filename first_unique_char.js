/*
Find the index, start with 0, of the first unique character in a string. For example, for string "philip", you should return 1, which is the index of the first unique character "h".
*/

let string = "philip";

let char = firstUniqueChar(string);

console.log(char);

function firstUniqueChar(s) {

  let histogram = {};
  
  for (let i = 0; i < s.length; i++) {
    let letter = s.charAt(i);

    if (histogram.hasOwnProperty(letter)) {
      histogram[letter] += 1;
    } else {
      histogram[letter] = 1;
    }
    
  }
  
  let index = 0;

  while(index < s.length) {
    if (histogram[s[index]] === 1) {
      return index;
    }
    
    index += 1;
  }
  
  return -1;
}