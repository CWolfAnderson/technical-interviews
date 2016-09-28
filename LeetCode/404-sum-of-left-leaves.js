/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
var sumOfLeftLeaves = function(root) {
  
  if (!root) {
    return 0;
  }
  
  if (root.left && root.right) {
    if (!root.left.left && !root.left.right) {
      return root.left.val + sumOfLeftLeaves(root.right);    
    } else {
      return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    }
  } else if (root.left) {
    if (!root.left.left && !root.left.right) {
      return root.left.val;
    } else {
      return sumOfLeftLeaves(root.left);
    }
    
  } else if (root.right) {
    return sumOfLeftLeaves(root.right);
  } else {
    return 0;
  }
  
};