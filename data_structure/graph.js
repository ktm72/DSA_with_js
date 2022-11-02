class Graph {
  constructor() {
    this.adjacentList = {};
  }
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
      return true;
    }
    return false;
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
      this.adjacentList[vertex1].push(vertex2);
      this.adjacentList[vertex2].push();
      return true;
    }
    return false;
  }
}

let myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addEdge("1", "2");
console.log(myGraph);
