var sumOfDistancesInTree = function (n, edges) {
  if (n === 1) return [0]; //base case
  let graph = {}; //adjacency matrix or list
  const dist = new Array(n).fill(0),
    count = new Array(n).fill(0);

  for (const [v, e] of edges) {
    if (!(v in graph)) graph[v] = [];
    if (!(e in graph)) graph[e] = [];
    graph[v].push(e);
    graph[e].push(v);
  }

  postOrder(0, -1);
  preOrder(0, -1);
  return dist;
  function postOrder(node, parent) {
    for (const child of graph[node]) {
      if (child === parent) continue;
      postOrder(child, node);
      count[node] += count[child];
      dist[node] += dist[child] + count[child];
    }
    count[node]++;
  }
  function preOrder(node, parent) {
    for (const child of graph[node]) {
      if (child === parent) continue;
      dist[child] = dist[node] - count[child] + (n - count[child]); //n =graphSize
      preOrder(child, node);
    }
  }
};
