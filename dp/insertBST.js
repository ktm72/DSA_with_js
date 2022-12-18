var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;

  // let curr = root;
  // let prev = null;
  // while(curr){
  //     if(val>curr.val){
  //         prev = curr;
  //         curr = curr.right;
  //     } else {
  //         prev = curr;
  //         curr = curr.left;
  //     }
  // }
  // if(val< prev.val) prev.left = newNode;
  // else prev.right = newNode;

  const compute = (node) => {
    if (!node) return;
    if (node.val > val) compute(node.left);
    else compute(node.right);
    if (!node.left && node.val > val) {
      node.left = new TreeNode(val);
    } else if (!node.right && node.val < val) {
      node.right = new TreeNode(val);
    }
  };
  compute(root);
  return root;
};
