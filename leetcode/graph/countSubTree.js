/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  const result = new Array(n).fill(0);
  //   const adjList = buildAdjList(n, edges);
  const adj = Array.from(Array(n), () => new Array());
  for (const [from, to] of edges) {
    adj[from].push(to);
    adj[to].push(from);
  }

  let labelCount = new Array(26).fill(0);
  const dfs = (currNode) => {
    const labelCode = labels.charCodeAt(currNode) - 97; //"a".charCodeAt()=97
    const startingCount = labelCount[labelCode];
    labelCount[labelCode] += 1;
    result[currNode] = 1;
    for (const child of adj[currNode]) {
      // if(child === par) continue;
      if (!result[child]) dfs(child);
    }
    result[currNode] = labelCount[labelCode] - startingCount;
  };
  dfs(0, -1); //   getSubTreeTotals
  return result;
};

// const buildAdjList = (n, edges) => {
//   const adjList = new Array(n).fill(null).map(() => []);

//   edges.forEach(([from, to]) => {
//     adjList[from].push(to);
//     adjList[to].push(from);
//   });

//   return adjList;
// };
