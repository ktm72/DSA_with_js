//For this problem, any two points can be connected, so we are dealing with the complete graph.
//Thus, the number of edges is much larger (a square of) the number of points.
// we can keep track of the minimal distance to each point, and update that distance as we connect more points.
//For each round, we need to scan all points to find the next point to connect to.
//Prim's complete Graph algorithm
function minCostConnectPoints(points) {
  let vertices = points.length,
    min_dist = 0,
    currEdge = 0,
    connected = 0;
  //create a graph Array for n points with greater num
  let graph = new Array(vertices).fill(10000000); //weight=>distance
  //need to be connected all the points
  while (++connected < vertices) {
    graph[currEdge] = Number.MAX_SAFE_INTEGER; //visited
    let min_edge = currEdge;
    //explore all the points
    for (let j = 0; j < vertices; ++j) {
      //check each edge except currEdge and visited
      if (graph[j] != Number.MAX_SAFE_INTEGER) {
        //distances are the weights here
        // const [x1, y1] = points[i];
        // const [x2, y2] = points[j];
        // const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        const distance =
          Math.abs(points[currEdge][0] - points[j][0]) +
          Math.abs(points[currEdge][1] - points[j][1]);
        //update min val to that graph point
        graph[j] = Math.min(graph[j], distance);
        //
        min_edge = graph[j] < graph[min_edge] ? j : min_edge;
      }
    }
    //update min edge distance
    min_dist += graph[min_edge];
    //update min edge
    currEdge = min_edge;
  }
  return min_dist;
}
console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);

//Using MinPriorityQueue //Lazy version
// function minCostConnectPoints(points) {
//   const verticiesCount = points.length; //n
//   const pq = new MinPriorityQueue({ priority: ([cost]) => cost });
//   const visited = new Array(verticiesCount).fill(false);
//   let totalCost = 0,
//     connections = 0,
//     current = 0; //i
//   while (++connections < verticiesCount) {
//     visited[current] = true;
//     // Start dequeueing before adding the current node's neighbors to the pq
//     while (pq.size() && visited[pq.front().element[1]]) {
//       pq.dequeue();
//     }
//     for (const [cost, neighbor] of uniqueConnections(current)) {
//       pq.enqueue([cost, neighbor]);
//     }
//     const [cost, node] = pq.dequeue().element;
//     totalCost += cost;
//     current = node;
//   }
//   return totalCost;

//   function* uniqueConnections(curr) {
//     for (let i = 0; i < verticiesCount; i++) {
//       //already visited check
//       if (i === curr || visited[i]) continue;
//       //curr edge to adjacent edges
//       yield [dist(points[curr], points[i]), i];
//     }
//   }
// }

// function dist([x1, y1], [x2, y2]) {
//   return Math.abs(x1 - x2) + Math.abs(y1 - y2);
// }
