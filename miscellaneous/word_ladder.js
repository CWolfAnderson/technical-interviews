/*
Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that only one letter can be changed at a time and each intermediate word must exist in the dictionary. For example, given:

start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
One shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", the program should return its length 5.
*/
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let length = wordLadder("hit", "cog", ["hot","dot","dog","lot","log"]);

console.log(length);

function wordLadder(start, end, dict) {
  
  // breadth first search
  let queue = [Node(start, 1)];
  
  dict.push(end);
  
  let top;
  let word;
  let arr;
  let c;
  let temp;
  let newWord;
  
  while (queue.length > 0) {
    top = queue.shift();
    word = top.word;
    
    if (word === end) {
      return top.numSteps;
    }
    
    arr = word.split(""); // ["h", "i", "t"]
    
    for (let i = 0; i < arr.length; i++) {      
      for (let j = 0; j < alphabet.length; j++) {
        c = alphabet.charAt(j);
        temp = arr[i]; // "h"
        
        // swap out letter with alphabet letter
        if (arr[i] !== c) {
          arr[i] = c;
        }
        
        newWord = arr.join(""); // "ait"
        
        // if new word is in the dictionary, add it to the queue
        // then remove the word from the dictionary
        if (dict.indexOf(newWord) > -1) {
          queue.push(Node(newWord, top.numSteps+1));
          dict.splice(dict.indexOf(newWord), 1);
        }
        
        // reinsert the original letter
        arr[i] = temp;
        
      }      
    }
    
  }
  
  return 0;
  
}

function Node(w, ns) {
  return {
    word: w,
    numSteps: ns
  };
}