/*
Implement a trie
*/

function TrieNode(d) {
    this.data = d;
    this.children = [];
    this.endOfWord = false;
}

TrieNode.prototype.add = function(s) {
  var current = this;
  var currentLetter;
  var children;
  
  // add each letter in s
  for (var i = 0; i < s.length; i++) {

    children = current.children;
    currentLetter = s.charAt(i);        
    
    // check if currentLetter node is in children
    var found = false;
    var index = children.length;
    for (var j = 0; j < children.length; j++) {
      if (children[j].data === currentLetter) {
        found = true;
        index = j;
      }
    }
    if (!found) {      
      children.push(new TrieNode(currentLetter));
    }
    
    current = children[index];
    
    if (i === s.length-1) current.endOfWord = true;
  }
  
};

TrieNode.prototype.isWord = function(s) {
  var current = this;
  var currentLetter;
  var children;
  
  // add each letter in s
  for (var i = 0; i < s.length; i++) {
    
    children = current.children;
    currentLetter = s.charAt(i);        
    
    // check if currentLetter node is in children
    var found = false;
    for (var j = 0; j < children.length; j++) {
      if (children[j].data === currentLetter) {
        found = true;
        current = children[j];
      }
    }
    if (!found) return false;
    if (i === s.length-1 && current.endOfWord) return true;
    else if (i === s.length-1 && !current.endOfWord) return false;
  }
    
};

var root = new TrieNode("root");

root.add("hello");

// console.log(root.children);
// console.log(root.children[0].children);
// console.log(root.children[0].children[0].children);
// console.log(root.children[0].children[0].children[0].children);
// console.log(root.children[0].children[0].children[0].children[0].children);

var hell = root.isWord("hell");
var hello = root.isWord("hello");

console.log(hell); // false
console.log(hello); // true

root.add("hell");
var hell2 = root.isWord("hell");

console.log(hell2); // true

// console.log(root.children);
// console.log(root.children[0].children);
// console.log(root.children[0].children[0].children);
// console.log(root.children[0].children[0].children[0].children);
// console.log(root.children[0].children[0].children[0].children[0].children);
