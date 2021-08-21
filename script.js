/* This is in-order traversal for a binary tree */

function TreeNode(value,left,right) {
  value===undefined ? 0 : value;
  left===undefined ? null : left;
  right===undefined ? null : right;
}

// make so that it fits on phone 
// portrait mode


troot = TreeNode(1,null,TreeNode(2,TreeNode(3,null,null),null);

const inorderTraversal = function(troot) {
  const out = [];

  function traverse(troot) {
    if(troot===null) return;
    traverse(troot.left);
    out.push(troot.value);
    traverse(troot.right)
  }

  traverse(troot);
}