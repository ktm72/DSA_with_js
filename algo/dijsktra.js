function shortestPath() {
  const graph = [
    [0, 1, 4, 0, 0, 0],
    [1, 0, 4, 2, 7, 0],
    [4, 4, 0, 3, 5, 0],
    [0, 2, 3, 0, 4, 6],
    [0, 7, 5, 4, 0, 7],
    [0, 0, 0, 6, 7, 0],
  ];
  return dijkstra(graph);
}

function dijkstra(graph) {
  let size = graph.length;
  let parent = new Array(size); //Stores Shortest Path Structure
  let value = new Array(size).fill(Number.MAX_VALUE); //Keeps shortest path values to each vertex from source
  let processed = new Array(size).fill(false); //TRUE->Vertex is processed

  //Assuming start point as Node-0
  parent[0] = -1; //Start node has no parent
  value[0] = 0; //start node has value=0 to get picked 1st

  //Include (V-1) edges to cover all V-vertices
  for (let i = 0; i < size - 1; ++i) {
    //Select best Vertex by applying greedy method
    let U = selectMinVertex(value, processed, size);
    processed[U] = true; //Include new Vertex in shortest Path Graph
    //Relax adjacent vertices (not yet included in shortest path graph)
    for (let j = 0; j < size; ++j) {
      /* 3 conditions to relax:-
			      1.Edge is present from U to j.
			      2.Vertex j is not included in shortest path graph
			      3.Edge weight is smaller than current edge weight
			*/
      if (
        graph[U][j] != 0 &&
        processed[j] == false &&
        value[U] != Number.MAX_VALUE &&
        value[U] + graph[U][j] < value[j]
      ) {
        value[j] = value[U] + graph[U][j];
        parent[j] = U;
      }
    }
  }
}
function selectMinVertex(value, processed) {
  let minimum = Number.MAX_VALUE;
  let vertex;
  for (let i = 0; i < size; ++i) {
    if (processed[i] == false && value[i] < minimum) {
      vertex = i;
      minimum = value[i];
    }
  }
  return vertex;
}
