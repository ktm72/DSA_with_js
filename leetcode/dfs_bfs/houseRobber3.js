var rob = function (root) {
  //   const res = dfs(root);

  //   return Math.max(...res);
  return dfs(root)[0];

  function dfs(node) {
    // if null node
    // first is the sum of the prev node included and
    // the second is the sum without the prev node
    if (node === null) return [0, 0];

    // const [withPrevLeft, withoutPrevLeft] = dfs(node.left);
    // const [withPrevRight, withoutPrevRight] = dfs(node.right);

    // const withCurr = withoutPrevLeft + withoutPrevRight + node.val;
    // const withoutCurr =
    //   Math.max(withPrevLeft, withoutPrevLeft) +
    //   Math.max(withPrevRight, withoutPrevRight);

    // return [withCurr, withoutCurr];
    const left = dfs(node.left);
    const right = dfs(node.right);
    //even level(withoutRoot)
    const childrenMax = left[0] + right[0];
    // Math.max(even lebel, odd level(withRoot) )
    const currMax = Math.max(childrenMax, node.val + left[1] + right[1]);
    return [currMax, childrenMax];
  }
};
//bfs+memo
var rob = function (root) {
  const map = new Map();
  if (!root) return 0;
  if (map.get(root)) return map.get(root);

  let withoutRootMax = rob(root.left) + rob(root.right);
  let withRoot_max = root.val;

  if (root.left) {
    //adding right and left of adjacent left
    withRoot_max += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    //adding right and left of adjacent right
    withRoot_max += rob(root.right.left) + rob(root.right.right);
  }
  map.set(root, Math.max(withoutRootMax, withRoot_max));
  return map.get(root);
};
