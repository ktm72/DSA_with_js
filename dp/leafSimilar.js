// recursion
function leafSimilar(root1, root2) {
  let arr1 = [],
    arr2 = [];
  function getLeafVals(root, arr) {
    if (!root) return null;
    if (!root.left && !root.right) {
      arr.push(root.val);
    }
    getLeafVals(root.left, arr);
    getLeafVals(root.right, arr);
  }
  getLeafVals(root1, arr1);
  getLeafVals(root2, arr2);
  let len1 = arr1.length;
  if (len1 !== arr2.length) return false;

  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

//DFS
function leafSimilar(root1, root2) {
  if (!root1 || !root2) return false;
  function equals(a, b) {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  }
  function getLeafVals(root) {
    let arr = [];
    let stack = [root];
    while (stack.length) {
      const node = stack.pop();
      if (!node.left && !node.right) arr.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return arr;
  }
  return equals(getLeafVals(root1), getLeafVals(root2));
}
