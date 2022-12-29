function longestConnectedSize(graph) {
  let longest = 0;
  let visited = new Set();
  for (let vertex in graph) {
    const size = exploreSize(graph, vertex, visited);
    if (size > longest) longest = size;
  }
  return longest;
}
function exploreSize(graph, node, visited) {
  //already visited
  if (visited.has(String(node))) return 0;
  visited.add(String(node));
  let size = 1;
  for (let neighbour of graph[node]) {
    size += exploreSize(graph, neighbour, visited);
  }
  return size;
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
console.log(longestConnectedSize(graph)); //longest->4
