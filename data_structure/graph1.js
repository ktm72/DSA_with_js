const PriorityQueue = require("./priorityQ.js");
class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }
  //add vertices and edges
  addNode(label) {
    if (!this.nodes.has(label)) {
      this.nodes.add(label);
      //initialize edge for node
      this.edges[label] = new Set();
      return true;
    }
    return false;
  }
  //add Directed Edge
  addDirectedEdge(node1, node2, weight = 1) {
    //ensure node are initiated
    this.addNode(node1);
    this.addNode(node2);
    //add edge
    this.edges[node1].add({ node: node2, weight });
  }
  //add Bidirectional Edge
  addBidirectionalEdge(node1, node2, weight = 1) {
    this.addDirectedEdge(node1, node2, weight);
    this.addDirectedEdge(node2, node1, weight);
  }
  display() {
    let output = "";
    for (const node of this.nodes) {
      output += `${node} -> ${Array.from(this.edges[node])
        .map((edge) => edge.node)
        .join(", ")}\n`;
    }
    return output;
  }

  bfs(node) {
    const queue = [node];
    const visited = new Set();
    while (queue.length) {
      const currNode = queue.shift(); //dequeue
      visited.add(currNode);
      const edges = this.edges[currNode];
      for (const edge of edges) {
        if (!visited.has(edge.node)) {
          queue.push(edge.node);
        }
      }
    }
  }

  dfs(node) {
    const stack = [node];
    const visited = new Set();
    while (stack.length) {
      const currNode = stack.pop();
      visited.add(currNode);
      const edges = this.edges[currNode];
      for (const edge of edges) {
        if (!visited.has(edge.node)) {
          stack.push(edge.node);
        }
      }
    }
    return visited;
  }
  djisktra(start, end) {
    let distances = {};
    let prev = {}; //Stores the reference to previous nodes(weight)
    const pq = new PriorityQueue(this.nodes.length * this.nodes.length);
    //initialize start with 0 priority
    distances[start] = 0;
    pq.enqueue(start);
    //initialize all other node with infinite priority
    //no previous node
    for (const node of this.nodes) {
      if (node !== start) {
        distances[node] = Infinity;
        prev[node] = null;
      }
    }
    //algorithm
    while (!pq.isEmpty) {
      const nodeObj = pq.dequeue();
      const node = nodeObj.value;
      // const weight = nodeObj.priority;
      const neighbours = this.edges[node];
      //edge = neighbour
      for (const neighbour of neighbours) {
        const neighbourNode = neighbour.node;
        //ignore neighbour if it was previously visited
        if (prev[node] && prev[node] === neighbourNode) continue;
        //calculate potential distance
        const possibleDistance = distances[node] + neighbour.weight;
        //only consider min/better distance
        if (possibleDistance < distances[neighbourNode]) {
          distances[neighbourNode] = possibleDistance; //update
          //setting current node in place of prev neighbour node
          prev[neighbourNode] = node;
          //adding better distance to pq
          pq.enqueue(neighbourNode, possibleDistance);
        }
      }
    }
    return distances[end];
  }
}

const g = new Graph();
// g.addBidirectionalEdge(1, 2);
// g.addBidirectionalEdge(2, 3);
g.addBidirectionalEdge("A", "C", 100);
g.addBidirectionalEdge("A", "B", 3);
g.addBidirectionalEdge("A", "D", 4);
g.addBidirectionalEdge("D", "C", 3);
g.addBidirectionalEdge("D", "E", 8);
g.addBidirectionalEdge("E", "F", 10);
g.addBidirectionalEdge("B", "G", 9);
g.addBidirectionalEdge("E", "G", 50);

console.log(g.djisktra("A", "E"));
// console.log(g.nodes);
// console.log(g.edges);

// console.log(g.display());
