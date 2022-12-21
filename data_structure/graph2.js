// const dfs = (graph, source) => {
//   const stack = [source];
//   while (stack.length) {
//     const current = stack.pop();
//     console.log(current);

//     for (const neighbour of graph[current]) {
//       stack.push(neighbour);
//     }
//   }
// };
//recursive
// const dfs = (graph, source) => {
//   console.log(source);
//   for (const neighbour of graph[source]) {
//     dfs(graph, neighbour);
//   }
// };
class PseudoQueue {
  #items;
  #head;
  #tail;
  constructor() {
    this.#items = {};
    this.#head = 0;
    this.#tail = 0;
  }
  enqueue(item) {
    this.#items[this.#tail] = item;
    this.#tail++;
  }
  dequeue() {
    const item = this.#items[this.#head];
    delete this.#items[this.#head];
    this.#head++;
    return item;
  }
  get length() {
    return this.#tail - this.#head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
const bfs = (graph, source) => {
  const queue = new PseudoQueue();
  queue.enqueue(source);
  while (!queue.isEmpty) {
    const current = queue.dequeue();
    console.log(current);
    for (const neighbour of graph[current]) {
      queue.enqueue(neighbour);
    }
  }
};

//graph = Adjacency List = edges
const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// dfs(graph, "a");
bfs(graph, "a");
