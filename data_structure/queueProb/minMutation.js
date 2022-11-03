class Queues {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

function minMutation(start, end, bank) {
  let stored = new Set(bank);
  if (!stored.has(end)) return -1;
  const findMutation = (gene, mutation) => {
    let diff = 0;
    for (let i = 0; i < gene.length; i++) {
      if (gene[i] != mutation[i]) diff++;
      if (diff >= 2) return false;
    }
    return true;
  };
  let visited = new Set();
  const queue = new Queues();
  queue.enqueue([start, 0]);
  visited.add(start);
  while (queue.length) {
    let [gene, n] = queue.dequeue();
    if (gene == end) return n;
    for (let i = 0; i < bank.length; i++) {
      if (visited.has(bank[i])) continue;
      let isMutation = findMutation(gene, bank[i]);
      if (isMutation) {
        queue.enqueue([bank[i], n + 1]);
        visited.add(bank[i]);
      }
    }
  }
  return -1;
}

console.log(
  minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);
