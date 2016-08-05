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

let n1 = Node(1);
let n2 = Node(2);
let n3 = Node(3);
let n4 = Node(4);
let n5 = Node(5);

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

let connected = clone(n1);

console.log(connected);

// breadth first search
function clone(root) {
  
  let cloned = [];
  let queue = [];
  
  root.visited = true;
  queue.push(root);
  cloned.push(deepCopy(root));
  
  let current;
  
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
  let returnObj = {};
  for (let key in obj) {
    returnObj[key] = obj[key];
  }
  return returnObj;
}