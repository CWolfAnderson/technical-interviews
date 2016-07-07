function Node(d) {
  return {
    data: d,
    left: null,
    right: null
  };
}

var n1 = Node(1);
var n2 = Node(2);
var n3 = Node(3);
var n4 = Node(4);
var n5 = Node(5);
var n6 = Node(6);
var n7 = Node(7);

n2.left = n1;
n2.right = n3;
n4.left = n2;
n4.right = n6;
n6.left = n5;
n6.right = n7;

// inOrder(n4);
function inOrder(current) {
  
  if (current !== null) {
  
  inOrder(current.left);
  console.log(current.data);
  inOrder(current.right);
  
  }
}

// preOrder(n4);
function preOrder(current) {
  
  if (current !== null) {
    
    console.log(current.data);
    preOrder(current.left);
    preOrder(current.right);
    
  }
  
}

postOrder(n4);
function postOrder(current) {
  
  if (current !== null) {
    
    postOrder(current.left);
    postOrder(current.right);
    console.log(current.data);
    
  }
  
}