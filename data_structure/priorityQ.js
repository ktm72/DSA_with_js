class PriorityQueue {
  #list = [];
  #capacity; //max list size
  constructor(capacity) {
    this.#capacity = Math.max(Number(capacity), 0) || null;
  }
  get size() {
    return this.#list.length;
  }
  get isFull() {
    return this.#capacity !== null && this.size === this.#capacity;
  }
  get isEmpty() {
    return this.size === 0;
  }
  enqueue(value, priority = 0) {
    priority = Math.max(Number(priority), 0); //not less than 0;
    const elem = { value, priority };

    if (this.isEmpty || elem.priority >= this.#list[this.size - 1].priority) {
      this.#list.push(elem);
    } else {
      for (let index in this.#list) {
        if (elem.priority < this.#list[index].priority) {
          this.#list.splice(index, 0, elem);
          break;
        }
      }
    }
    return this.size;
  }

  dequeue() {
    return this.size ? this.#list.pop() : void 0;
  }
  peek() {
    return this.size ? this.#list[this.size - 1] : void 0;
  }
  print() {
    console.log(this.#list);
  }
}
module.exports = PriorityQueue;

// const pq = new PriorityQueue();

// pq.enqueue(12);
// pq.enqueue(20, 2);
// pq.enqueue(24, 4);
// pq.enqueue(45, 3);
// pq.enqueue(25, 4);

// console.log(pq.peek());
// pq.print();
