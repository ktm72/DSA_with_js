// bfs > dfs
const buildGraph = (edges) => {
  let graph = new Map();
  // create adjacency list from egdes
  // store the undirected edges for both vertices
  for (let [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    if (graph.has(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }
  return graph;
};
var validPath = function (n, edges, source, destination) {
  let graph = buildGraph(edges);
  let visited = new Set();
  function dfs(vertex) {
    visited.add(vertex);
    if (vertex === destination) return true;
    let neighbours = graph.get(vertex);
    for (let neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        dfs(neighbour);
      }
    }
  }
  dfs(source);
  return visited.has(destination);
};

var validPath = function (n, edges, source, destination) {
  let graph = {};
  let visited = new Set();
  // create adjacency list from egdes
  for (let [v, e] of edges) {
    if (graph[v]) {
      graph[v].push(e);
    } else {
      graph[v] = [e];
    }
    if (graph[e]) {
      graph[e].push(v);
    } else {
      graph[e] = [v];
    }
  }
  //   create a queue as we will apply BFS
  let stack = [source];
  while (stack.length) {
    const currEdge = stack.pop();
    if (currEdge === destination) return true;
    // check whether its visited or not
    else if (currEdge in graph && !visited.has(currEdge)) {
      // add the adjacent vertices of the current node to the queue
      stack.push(...graph[currEdge]);
    }
    // mark this currEdge vertex as visited
    visited.add(currEdge);
  }
  return false;
};

class UnionFind {
  constructor(size) {
    this.nodes = new Array(size);
  }
  //find the parent of the node index
  find(node) {
    let orgNode = node;
    while (node !== this.nodes[node]) {
      node = this.nodes[node];
    }
    // compress tree.. path to root
    this.nodes[orgNode] = node;
    return node;
  }
  //through index
  union(node1, node2) {
    if (this.nodes[node1] === undefined) {
      this.nodes[node1] = node1;
    }
    let rootX = this.find(node1);
    let rootY = this.find(node2);
    //not connected
    if (rootX !== rootY) {
      if (rootY === undefined) {
        this.nodes[node2] = rootX;
      } else {
        this.nodes[rootY] = rootX;
      }
    }
  }
  isConnected(node1, node2) {
    let rootX = this.find(node1);
    let rootY = this.find(node2);
    return rootX === rootY;
  }
}

var validPath = function (n, edges, start, end) {
  let uf = new UnionFind(n);
  for (let i = 0; i < edges.length; i++) {
    const vertex = edges[i][0];
    const edge = edges[i][1];
    uf.union(vertex, edge);
  }
  let result = uf.isConnected(start, end);
  return result;
};
