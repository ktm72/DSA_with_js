class DSU {
  constructor(size) {
    this.components = new Array(size).fill(-1);
  }
  //find the parent of the node
  find(node) {
    if (this.components[node] < 0) return node;
    return this.find(this.components[node]);
  }
  //through index
  union(node1, node2) {
    const parentNode1 = this.find(node1);
    const parentNode2 = this.find(node2);
    if (parentNode1 !== parentNode2) {
      const sizeOfNodeTwo = this.components[parentNode2];
      this.components[parentNode1] += sizeOfNodeTwo;
      this.components[parentNode2] = parentNode1;
    }
  }
}
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
