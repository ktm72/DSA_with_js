class Queue {
  #items;
  #head;
  #tail;
  #size;
  constructor() {
    this.#items = {};
    this.#head = 0;
    this.#tail = 0;
    this.#size = 0;
  }
  enqueue(element) {
    this.#items[this.#tail] = element;
    this.#tail++;
    this.#size++;
  }
  dequeue() {
    if (this.#size === 0) return void 0;
    let item = this.#items[this.#head];
    delete this.#items[this.#head];
    this.#head++;
    this.#size--;
    return item;
  }
  peek() {
    return this.#items[this.#head];
  }
  get length() {
    return this.#size == null ? 0 : this.#size;
  }
}
function shortestPath(edges, start, end) {
  const graph = buildGraph(edges);
  //starting node is visited
  const visited = new Set([start]);
  const queue = new Queue();
  //node, distance
  queue.enqueue([start, 0]);
  while (queue.length > 0) {
    const [node, distance] = queue.dequeue();
    // console.log(node, distance);
    if (node === end) return distance;
    for (let neighbour of graph.get(node)) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.enqueue([neighbour, distance + 1]);
      }
    }
  }
  //if not connected
  return -1;
}

const buildGraph = (edges) => {
  let graph = new Map();
  for (const [v, e] of edges) {
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

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2
// console.log(buildGraph(edges));
