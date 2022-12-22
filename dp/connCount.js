function connectedCount(graph) {
  let count = 0;
  let visited = new Set();
  for (let vertex in graph) {
    if (explore(graph, vertex, visited) === true) count++;
  }
  return count;
}

function explore(graph, current, visited) {
  //if already explored
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (let neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }
  //explored all of the vertices
  return true;
}

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [2, 3],
};
console.log(connectedCount(graph)); //count->2
