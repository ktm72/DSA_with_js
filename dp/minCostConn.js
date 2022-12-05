//For this problem, any two points can be connected, so we are dealing with the complete graph.
//Thus, the number of edges is much larger (a square of) the number of points.
// we can keep track of the minimal distance to each point, and update that distance as we connect more points.
//For each round, we need to scan all points to find the next point to connect to.
//Prim's complete Graph algorithm
function minCostConnectPoints(points) {
  let n = points.length,
    min_dist = 0,
    i = 0,
    connected = 0;
  //create a graph Array for n points with greater num
  let graph = new Array(n).fill(10000000);
  //need to be connected all the points
  while (++connected < n) {
    graph[i] = Number.MAX_SAFE_INTEGER;
    let min_j = i;
    //explore all the points
    for (let j = 0; j < n; ++j)
      //check each graph point is not equal to max int
      if (graph[j] != Number.MAX_SAFE_INTEGER) {
        // const [x1, y1] = points[i];
        // const [x2, y2] = points[j];
        // const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        //update min val to that graph point
        graph[j] = Math.min(
          graph[j],
          Math.abs(points[i][0] - points[j][0]) +
            Math.abs(points[i][1] - points[j][1])
        );
        min_j = graph[j] < graph[min_j] ? j : min_j;
      }
    //update min graph node distance
    min_dist += graph[min_j];
    //update min graph node
    i = min_j;
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
