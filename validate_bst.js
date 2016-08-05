

function Node(d) {
  this.data = d;
  this.left = null;
  this.right = null;  
  
}

var root = new Node(5);

root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(validateBST(root));

function validateBST(root) {      
  
  var queue = [];
  
  queue.push(root);
  var current;
  
  while (queue.length > 0) {
        
    current = queue.shift();
        
    if (current.left !== null && current.right !== null) {
      if (current.data < current.left.data || current.data > current.right.data) {              
        return false;
      }
    } else if (current.left !== null) {
      if (current.data < current.left.data) {      
        return false;
      }
    } else if (current.right !== null) {
      if (current.data > current.right.data) {      
        return false;
      }
    }
    
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
    
  }
  
  return true;
  
}