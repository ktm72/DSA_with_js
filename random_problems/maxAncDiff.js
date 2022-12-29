//recursive
function maxAncestorDiff(root) {
  let diff = 0;
  let dfs = function (node, min, max) {
    if (!node) return 0;
    min = Math.min(min, node.val);
    max = Math.max(max, node.val);
    diff = Math.max(diff, max - min);
    dfs(node.left, min, max);
    dfs(node.right, min, max);
  };
  dfs(root, root.val, root.val);
  return diff;
}

const maxAncestorDiff = (root) => {
  let diff = 0;
  if (!root) return 0;
  const stack = [[root, root.val, root.val]];
  while (stack.length > 0) {
    const [node, currMax, currMin] = stack.pop();
    //do your operation
    currMax = Math.max(currMax, node.val);
    currMin = Math.min(currMin, node.val);
    diff = Math.max(diff, currMax - currMin);
    if (node.right !== null) {
      stack.push([node.right, currMax, currMin]);
    }
    if (node.left !== null) {
      stack.push([node.left, currMax, currMin]);
    }
  }
  return diff;
};
