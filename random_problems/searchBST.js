var searchBST = function (root, val) {
  //   if (!root) return null;
  //   let curr = root;
  //   while (curr) {
  //     if (curr.val === val) {
  //       return curr;
  //     }
  //     if (curr.val < val) {
  //       curr = curr.right;
  //     } else {
  //       curr = curr.left;
  //     }
  //   }
  //   return curr;
  !root
    ? null
    : root.val === val
    ? root
    : root.val < val
    ? searchBST(root.right)
    : searchBST(root.left);
};
