//Using MinPriorityQueue //Lazy version
// function minCostConnectPoints(points) {
//   const verticiesCount = points.length; //n
//   const pq = new MinPriorityQueue({ priority: ([cost]) => cost });
//   const visited = new Array(verticiesCount).fill(false);
//   let totalCost = 0,
//     connections = 0,
//     current = 0; //index
//   while (++connections < verticiesCount) {
//     visited[current] = true;
//     // Start dequeueing before adding the current node's neighbors to the pq
//     while (pq.size() && visited[pq.front().element[1]]) {
//       pq.dequeue();
//     }
//     for (let i = 0; i < verticiesCount; i++) {
//       //const [cost, neighbor] of uniqueConnections(current)
//       //already visited check
//       if (i === current || visited[i]) continue;
//       //curr edge to adjacent edges
//       const [cost, neighbor] = [dist(points[current], points[i]), i];
//       pq.enqueue([cost, neighbor]);
//     }
//     const [cost, node] = pq.dequeue().element;
//     totalCost += cost;
//     current = node;
//   }
//   return totalCost;

//   //   function* uniqueConnections(curr) {
//   //     for (let i = 0; i < verticiesCount; i++) {
//   //       //already visited check
//   //       if (i === curr || visited[i]) continue;
//   //       //curr edge to adjacent edges
//   //       yield [dist(points[curr], points[i]), i];
//   //     }
//   //   }
// }

// function dist([x1, y1], [x2, y2]) {
//   return Math.abs(x1 - x2) + Math.abs(y1 - y2);
// }

var minCostConnectPoints = function (points) {
  const verticies = points.length; //n
  const visited = new Set();
  const connectedEdges = new Array(verticies).fill(null);
  const parentEdges = new Array(verticies).fill(null);
  //datastructure.js library
  const pq = new MinPriorityQueue({
    compare: (a, b) => a[1] - b[1],
  });
  //if the graph(points) given us all edges with weight
  //we would have added that directly to pq
  pq.enqueue([0, 0]); // current = index, weight = distance

  let minCost = 0,
    connections = 0;
  while (!pq.isEmpty() && connections < verticies) {
    //visited.size < verticies
    const [current, distance] = pq.dequeue();
    if (visited.has(current)) continue;
    visited.add(current);
    connectedEdges[connections++] = current;
    parentEdges[0] = -1;
    minCost += distance;
    for (let i = 0; i < verticies; i++) {
      if (!visited.has(i)) {
        pq.enqueue([
          i,
          Math.abs(points[current][0] - points[i][0]) +
            Math.abs(points[current][1] - points[i][1]),
        ]);
      }
    }
  }
  if (connections !== verticies) {
    return null, null;
  }
  return minCost, connectedEdges;
};
console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);
