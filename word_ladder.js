/*
Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that only one letter can be changed at a time and each intermediate word must exist in the dictionary. For example, given:

start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
One shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", the program should return its length 5.
*/
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var letter;
for (var i = 0; i < alphabet.length; i++) {
  letter = alphabet.charAt(i);
}

var ladder = wordLadder("hit", "cog", ["hot","dot","dog","lot","log"]);

console.log("ladder: " + ladder.join(" -> "));

function wordLadder(start, end, dict) {
  
  var sequence = [start];  
  
  var startChars = start.split("");
  var endChars = end.split("");
  
  // find which chars are wrong
  var wrongChars = [];
  for (var i = 0; i < startChars.length; i++) {
    if (startChars[i] !== endChars[i]) {
      wrongChars.push(i);
    }
  }
  
  
  
  sequence.push(end);
  return sequence;
  
}