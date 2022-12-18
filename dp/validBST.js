//dfs
function isValidBST(root) {
  function valid(node, left, right) {
    if (!node) return true;
    if (!(node.val < right && node.val > left)) return false;
    //left < parent, update right
    //right > parent, update left
    return (
      valid(node.left, left, node.val) && valid(node.right, node.val, right)
    );
  }
  //root could be within -inf<root.val<inf
  return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

var isValidBST = function (
  root,
  left = Number.NEGATIVE_INFINITY,
  right = Number.POSITIVE_INFINITY
) {
  //root could be within -inf<root.val<inf
  if (!root) return true;
  if (!(root.val < right && root.val > left)) return false;
  //left < parent, update right
  //right > parent, update left
  return (
    isValidBST(root.left, left, root.val) &&
    isValidBST(root.right, root.val, right)
  );
};
