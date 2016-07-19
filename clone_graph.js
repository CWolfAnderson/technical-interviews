/*
Clone a graph. Input is a Node pointer. Return the Node pointer of the cloned graph.

A graph is defined below:
struct Node {
vector neighbors;
}
*/

function Node(d) {
  return {
    data: d
  };
}

var n1 = Node(1);
var n2 = Node(2);
var n3 = Node(3);
var n4 = Node(4);
var n5 = Node(5);

n1.neighbors = [n3, n5];
n2.neighbors = [n3, n4, n5];
n3.neighbors = [n1, n2];
n4.neighbors = [n2];
n5.neighbors = [n1, n2];

/*
      n1 ------ n3 ------- n2 ------- n4
      |                     |
      |                     |
      |                     |
      n5--------------------
*/

var connected = clone(n1);

console.log(connected);

// breadth first search
function clone(root) {
  
  var cloned = [];
  var queue = [];
  
  root.visited = true;
  queue.push(root);
  cloned.push(deepCopy(root));
  
  var current;
  
  while (queue.length > 0) {
    current = queue.shift();
    // console.log(current.data);
    
    current.neighbors.forEach(function(neighbor) {
      if (!neighbor.hasOwnProperty("visited")) {
        neighbor.visited = true;
        queue.push(neighbor);
        cloned.push(deepCopy(neighbor));
      }
    });
    
  }
  
  return cloned[0];
}

function deepCopy(obj) {
  var returnObj = {};
  for (var key in obj) {
    returnObj[key] = obj[key];
  }
  return returnObj;
}