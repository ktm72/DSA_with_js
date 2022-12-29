// The maximum flow problem in a network
// the convex hull algorithm, also known as the Dinic's algorithm.
// overview:
//1. Initialize the flow in the network to zero and set the residual capacity of each edge to its capacity.
//2. While there exists a path from the source vertex to the sink vertex:
// a. Find the minimum residual capacity along the path.
// b. Increase the flow through the path by the minimum residual capacity.
// c. Update the residual capacities of the edges in the path.

//3. Return the flow in the network as the maximum flow.
// Define a graph as an adjacency list.
const graph = {
  s: { a: 3, b: 2 },
  a: { b: 1, c: 3 },
  b: { c: 1, t: 2 },
  c: { t: 3 },
};

// Define the source vertex and the sink vertex.
const source = "s";
const sink = "t";

// Initialize the flow in the network to zero.
let flow = 0;

// Initialize the residual capacities of the edges to their capacities.
const residual = JSON.parse(JSON.stringify(graph));

// Define a function to find the path from the source vertex to the sink vertex.
function findPath(vertex, path, visited) {
  // Mark the vertex as visited.
  visited[vertex] = true;

  // If the vertex is the sink vertex, return the path.
  if (vertex === sink) {
    return path;
  }

  // Iterate over the edges from the vertex.
  for (const neighbor in residual[vertex]) {
    // Skip the edge if it has no residual capacity.
    if (residual[vertex][neighbor] <= 0) {
      continue;
    }

    // Skip the neighbor if it has already been visited.
    if (visited[neighbor]) {
      continue;
    }

    // Recursively find a path from the neighbor to the sink vertex.
    const newPath = findPath(neighbor, path.concat(neighbor), visited);

    // If a path was found, return it.
    if (newPath) {
      return newPath;
    }
  }

  // Return null if no path was found.
  return null;
}

// While there exists a path from the source vertex to the sink vertex:
while (true) {
  // Find the path from the source vertex to the sink vertex.
  const path = findPath(source, [source], {});

  // If no path was found, break out of the loop.
  if (!path) {
    break;
  }

  // Find the minimum residual capacity along the path.
  let minResidual = Infinity;
  for (let i = 0; i < path.length; i++) {}
}
