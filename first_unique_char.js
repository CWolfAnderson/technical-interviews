/*
Find the index, start with 0, of the first unique character in a string. For example, for string "philip", you should return 1, which is the index of the first unique character "h".
*/

var string = "philip";

var char = firstUniqueChar(string);

console.log(char);

function firstUniqueChar(s) {

  var histogram = {};
  
  for (var i = 0; i < s.length; i++) {
    var letter = s.charAt(i);

    if (histogram.hasOwnProperty(letter)) {
      histogram[letter] += 1;
    } else {
      histogram[letter] = 1;
    }
    
  }
  
  var index = 0;

  while(index < s.length) {
    if (histogram[s[index]] === 1) {
      return index;
    }
    
    index += 1;
  }
  
  return -1;
}