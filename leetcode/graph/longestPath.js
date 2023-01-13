/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
  const n = parent.length;
  const adjList = Array.from(Array(n), () => new Array());
  for (let i = 0; i < n; i++) {
    if (parent[i] == -1) continue;
    adjList[parent[i]].push(i);
  }
  let longest = 1;
  const getLongest = (node) => {
    let maxChild1 = 0;
    let maxChild2 = 0;

    adjList[node].forEach((child) => {
      const childLength = getLongest(child);

      // child letter matches our node, so we can't use it
      if (s[child] === s[node]) return;

      // compare and update the longest two child paths
      if (childLength > maxChild1) {
        maxChild2 = maxChild1;
        maxChild1 = childLength;
      } else if (childLength > maxChild2) {
        maxChild2 = childLength;
      }
    });

    // longest loop
    longest = Math.max(longest, maxChild1 + maxChild2 + 1);

    // return longest path up the tree
    return 1 + maxChild1;
  };
  getLongest(0);
  return longest;
};
