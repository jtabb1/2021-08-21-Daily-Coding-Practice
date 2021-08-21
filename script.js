/* This is in-order traversal for a binary tree */

function TreeNode(value,left,right) {
  value===undefined ? 0 : value;
  left===undefined ? null : left;
  right===undefined ? null : right;
}

// troot = TreeNode(1,null,TreeNode())