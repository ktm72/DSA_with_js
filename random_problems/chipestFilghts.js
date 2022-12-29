function findCheapestPrice(n, flights, src, dst, K) {
  // Create a graph with the input data
  const graph = {};
  for (let i = 0; i < flights.length; i++) {
    const [u, v, w] = flights[i];
    if (!graph[u]) {
      graph[u] = {};
    }
    graph[u][v] = w;
  }

  // Initialize distances to infinity and predecessor to null for all vertices
  const distances = {};
  const predecessors = {};
  for (let v of Object.keys(graph)) {
    distances[v] = Infinity;
    predecessors[v] = null;
  }
  distances[src] = 0;

  // Relax all edges |V| - 1 times
  for (let i = 0; i < n - 1; i++) {
    for (let u of Object.keys(graph)) {
      for (let v of Object.keys(graph[u])) {
        if (distances[v] > distances[u] + graph[u][v]) {
          distances[v] = distances[u] + graph[u][v];
          predecessors[v] = u;
        }
      }
    }
  }

  // Check for negative-weight cycles
  for (let u of Object.keys(graph)) {
    for (let v of Object.keys(graph[u])) {
      if (distances[v] > distances[u] + graph[u][v]) {
        console.log("Graph contains a negative-weight cycle.");
        return;
      }
    }
  }

  // Initialize a queue and a set to track visited nodes
  const queue = [src];
  const visited = new Set();

  // Perform breadth-first search to find the shortest path within K stops
  while (queue.length > 0) {
    const u = queue.shift();
    if (u === dst) {
      return distances[dst];
    }
    if (visited.has(u)) {
      continue;
    }
    visited.add(u);
    for (let v of Object.keys(graph[u])) {
      if (
        distances[u] + graph[u][v] <= distances[dst] &&
        predecessors[v] === u
      ) {
        queue.push(v);
      }
    }
  }

  return -1;
}

// Example usage:
const n = 3;
const flights = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500],
];
const src = 0;
const dst = 2;
const K = 1;
const cheapestPrice = findCheapestPrice(n, flights, src, dst, K);
console.log(
  `The cheapest price from ${src} to ${dst} within ${K} stops is ${cheapestPrice}.`
);
