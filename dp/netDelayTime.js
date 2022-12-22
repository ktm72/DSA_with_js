// const buildGraph = (edges) => {
//   const graph = {};
//   for (const edge of edges) {
//     const [src, dest, weight] = edge;
//     const srcInGraph = graph.hasOwnProperty(src);
//     if (!srcInGraph) graph[src] = {};
//     graph[src][dest] = weight;
//   }
//   return graph;
// };

//BFS - Djisktra
var networkDelayTime = function (times, n, k) {
  const graph = [];
  for (let [source, target, weight] of times) {
    if (!graph[source]) graph[source] = [];
    graph[source].push([target, weight]);
  }

  return bfs();

  function bfs() {
    const pq = new MinPriorityQueue({ compare: (a, b) => a[1] > b[1] });
    const visit = new Set();
    pq.enqueue([k, 0]);
    let maxPathTill = 0;
    while (!pq.isEmpty()) {
      const [node, cost] = pq.dequeue();
      if (visit.has(node)) continue;
      visit.add(node);
      maxPathTill = Math.max(maxPathTill, cost);
      if (graph[node]) {
        const neighbours = graph[node];
        for (let [neighbour, adjCost] of neighbours) {
          if (!visit.has(neighbour)) {
            pq.enqueue([neighbour, cost + adjCost]);
          }
        }
      }
    }
    return visit.size === n ? maxPathTill : -1;
  }
};

// Bellman-Ford
var networkDelayTime = function (times, numOfNodes, start) {
  const timeToReach = new Array(numOfNodes + 1).fill(Infinity);
  timeToReach[0] = 0;
  timeToReach[start] = 0;
  let changed = true;
  while (changed) {
    changed = false;
    times.forEach(([src, dest, cost]) => {
      let newTime = timeToReach[src] + cost;
      if (timeToReach[src] !== Infinity && timeToReach[dest] > newTime) {
        timeToReach[dest] = newTime;
        changed = true;
      }
    });
  }
  const res = Math.max(...timeToReach);
  return res === Infinity ? -1 : res;
};
