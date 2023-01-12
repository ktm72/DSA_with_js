/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  //     const result = new Array(n).fill(0);
  //   const adjList = buildAdjList(n, edges);
  //   const aCode = 'a'.charCodeAt(0);

  //   const getSubTreeTotals = (node, totals) => {
  //     const letterCode = labels.charCodeAt(node) - aCode;
  //     const startingTotal = totals[letterCode];
  //     totals[letterCode] += 1;
  //     result[node] = 1;

  //     for (let child of adjList[node]) {
  //       if (!result[child]) getSubTreeTotals(child, totals);
  //     }

  //     result[node] = totals[letterCode] - startingTotal;
  //   };

  //   getSubTreeTotals(0, new Array(26).fill(0));

  //   return result;
  const adj = Array.from(Array(n), () => new Array());
  for (const [U, V] of edges) {
    adj[U].push(V);
    adj[V].push(U);
  }
  const resultCount = new Array(n).fill(0);
  const DFS = (currNode, parent) => {
    const labelCode = labels.charCodeAt(currNode) - "a".charCodeAt();
    let labelCount = new Array(26).fill(0);
    labelCount[labelCode] = 1;
    for (const childNode of adj[currNode]) {
      if (childNode === parent) continue;
      const subCount = DFS(childNode, currNode);
      labelCount = labelCount.map((elem, index) => elem + subCount[index]);
    }
    resultCount[currNode] = labelCount[labelCode];
    return labelCount;
  };
  DFS(0, -1);
  return resultCount;
};

// const buildAdjList = (n, edges) => {
//   const adjList = new Array(n).fill(null).map(() => []);

//   edges.forEach(([from, to]) => {
//     adjList[from].push(to);
//     adjList[to].push(from);
//   });

//   return adjList;
// };
