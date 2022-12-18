class MyQueue {
  // constructor() {
  //   this.pushStack = [];
  //   this.popStack = [];
  // }

  // push(value) {
  //   this.pushStack.push(value);
  // }

  // pop() {
  //   if (!this.popStack.length) {
  //     while (this.pushStack.length) {
  //       this.popStack.push(this.pushStack.pop());
  //     }
  //   }
  //   return this.popStack.pop();
  // }
  // peek() {
  //   if (!this.popStack.length) {
  //     while (this.pushStack.length) {
  //       this.popStack.push(this.pushStack.pop());
  //     }
  //   }
  //   return this.popStack[this.popStack.length - 1];
  // }
  // empty() {
  //   return !this.pushStack.length && !this.popStack.length;
  // }
  queue;
  tail;
  constructor() {
    this.queue = [];
    this.tail = 0;
    this.head = 0;
  }
  get size() {
    return this.queue.length;
  }
  push(x) {
    this.queue[this.tail] = x;
    this.tail++;
  }

  pop() {
    if (!this.size) return null;
    const data = this.queue[this.head];
    // delete this.queue[0];
    // for (let i = 1; i < this.queue.length; i++) {
    //   this.queue[i - 1] = this.queue[i];
    // }
    this.head++;
    if (this.head === this.tail) {
      this.head = 0;
      this.tail = 0;
    }
    this.size--;
    return data;
  }

  peek() {
    return this.queue[0];
  }

  empty() {
    return this.tail === 0;
  }
}
