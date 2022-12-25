function bellmanFord(graph, source) {
  // Initialize distances to infinity and predecessor to null for all vertices
  const distances = {};
  const predecessors = {};
  for (let v of Object.keys(graph)) {
    distances[v] = Infinity;
    predecessors[v] = null;
  }
  distances[source] = 0;

  // Relax all edges |V| - 1 times
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let u of Object.keys(graph)) {
      for (let v of graph[u]) {
        if (distances[v] > distances[u] + graph[u][v]) {
          distances[v] = distances[u] + graph[u][v];
          predecessors[v] = u;
        }
      }
    }
  }

  // Check for negative-weight cycles
  for (let u of Object.keys(graph)) {
    for (let v of graph[u]) {
      if (distances[v] > distances[u] + graph[u][v]) {
        console.log("Graph contains a negative-weight cycle.");
        return;
      }
    }
  }

  return { distances, predecessors };
}

// Example usage:
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 },
};
const source = "A";
const { distances, predecessors } = bellmanFord(graph, source);

console.log(`Shortest distances from ${source}:`, distances);
console.log(`Predecessors:`, predecessors);

// function bellmanFord(graph, source) {
//     // Initialize the distances and predecessor arrays
//     const distances = new Array(graph.length).fill(Number.POSITIVE_INFINITY);
//     const predecessors = new Array(graph.length).fill(null);
//     distances[source] = 0;

//     // Relax all edges |V| - 1 times
//     for (let i = 1; i < graph.length; i++) {
//       for (let j = 0; j < graph.length; j++) {
//         for (let k = 0; k < graph[j].length; k++) {
//           const neighbor = graph[j][k];
//           if (distances[j] + neighbor.weight < distances[neighbor.vertex]) {
//             distances[neighbor.vertex] = distances[j] + neighbor.weight;
//             predecessors[neighbor.vertex] = j;
//           }
//         }
//       }
//     }

//     // Check for negative-weight cycles
//     for (let i = 0; i < graph.length; i++) {
//       for (let j = 0; j < graph[i].length; j++) {
//         const neighbor = graph[i][j];
//         if (distances[i] + neighbor.weight < distances[neighbor.vertex]) {
//           throw new Error('Graph contains a negative-weight cycle');
//         }
//       }
//     }

//     return { distances, predecessors };
//   }
