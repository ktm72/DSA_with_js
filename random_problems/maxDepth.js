function maxDepth(root) {
  if (!root) return 0;
  //   let num = 0;
  //   var stack = [[root, 1]];
  //   while (stack.length) {
  //     const [node, depth] = stack.pop();
  //     if (node) {
  //       num = Math.max(num, depth);
  //       stack.push([node.right, depth + 1]);
  //       stack.push([node.left, depth + 1]);
  //     }
  //   }
  //   return num;

  //recursive
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
