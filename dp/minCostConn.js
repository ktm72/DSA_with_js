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
