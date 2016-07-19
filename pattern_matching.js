/*
 Given a Pattern and a dictionary, print out all the strings   that match the pattern. where a character in the pattern is mapped uniquely to a character in the dictionary ( this is what i was given first). e.g 1. ("abc" , <"cdf", "too", "hgfdt" ,"paa">) -> output = "cdf" 2. ("acc" , <"cdf", "too", "hgfdt" ,"paa">) -> output = "too", "paa" 
*/

/*
Each array index refers to each occurrance of that letter
"abc" -> [0, 1, 2]
"cdf" -> [0, 1, 2]
"too" -> [0, 1, 1]
"hgfdt" -> too long
"paa" -> [0, 1, 1]
*/

// var pattern = "abc";
// var dictionary = ["cdf", "too", "hgfdt" ,"paa"];
// var result = matchPattern(pattern, dictionary);
// console.log(result);

var pattern = "acc";
var dictionary = ["cdf", "too", "hgfdt" ,"paa"];
var result = matchPattern(pattern, dictionary);
console.log(result);

function matchPattern(pat, dict) {
  
  // remove any words that are too short/long
  dict = dict.filter(function(word) {
    return word.length === pat.length;
  });
  
  // map words to patterns
  var patternArr = dict.map(patternMap);
  
  // map pattern to pattern
  var pattern = patternMap(pat);
  
  var toReturn = [];
  patternArr.forEach(function(arr, i) {
    if (arr.join() === pattern.join()) {
      toReturn.push(dict[i]);
    }
  });
  
  return toReturn;
  
}

function patternMap(word, i) {
  
  var wordArr = [];
  
  for(var j = 0; j < word.length; j++) {    
    var letter = word[j];
    
    if (word.indexOf(letter) < j) {
      wordArr.push(word.indexOf(letter));
    } else {
      wordArr.push(j);
    }
    
  }
  
  // console.log(word + " -> " + wordArr);
  
  return wordArr;
}