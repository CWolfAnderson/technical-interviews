'use strict';

class Node {
  constructor(d) {
    this.data = d;
  }
  getData() {
    return this.data;
  }
  setNeighbors(n) {
    this.neighbors = n;
  }
  getNeighbors() {
    return this.neighbors;
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

n1.setNeighbors([n3, n5]);
n2.setNeighbors([n3, n4, n5]);
n3.setNeighbors([n1, n2]);
n4.setNeighbors([n2]);
n5.setNeighbors([n1, n2]);

console.log('dfs(n1):');
dfs(n1);

// depth first search
function dfs(current) {

  console.log(current.getData());
  current.visited = true;
  
  current.getNeighbors().forEach(function(neighbor) {    
    if (!neighbor.hasOwnProperty("visited")) {
      dfs(neighbor);  
    }
  });
  
}

console.log('bfs(n1):');
bfs(n1);

// breadth first search
function bfs(root) {
  
  let queue = [];
  
  root.visited = true;
  queue.push(root);
  
  let current;
  
  while (queue.length > 0) {
    current = queue.shift();
    console.log(current.getData());

    // TODO: is this right

    current.getNeighbors().forEach(function(neighbor) {
      if (!neighbor.hasOwnProperty("visited")) {
        neighbor.visited = true;
        queue.push(neighbor);
      }
    });
    
  }
  
}