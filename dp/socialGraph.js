class Graph {
  constructor() {
    this.graph = {};
  }
  getNode(name) {
    return this.graph[name];
  }
  addUser(user) {
    this.graph[user.name] = user;
  }
}

class Node {
  constructor(user) {
    this.name = user.name;
    this.friends = {};
  }
  addConnection(user) {
    if (!this.friends[user.name]) {
      this.friends[user.name] = { name: user.name };
      user.addConnection(this);
    }
  }
}

const fabian = new Node({ name: "Fabian" });
const rey = new Node({ name: "Rey" });
const ellie = new Node({ name: "Ellie" });
const cassi = new Node({ name: "Cassi" });

const graph = new Graph();
graph.addUser(fabian);
graph.addUser(rey);
graph.addUser(ellie);
graph.addUser(cassi);

const FabianNode = graph.getNode("Fabian");
FabianNode.addConnection(graph.getNode("rey"));
