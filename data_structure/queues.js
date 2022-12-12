// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.first = newNode;
//     this.last = newNode;
//     this.length = 1;
//   }

//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   } // O(1)

//   dequeue() {
//     if (this.length === 0) return undefined;
//     let temp = this.first;
//     if (this.length === 1) {
//       this.first = null;
//       this.last = null;
//     } else {
//       this.first = this.first.next;
//       temp.next = null;
//     }
//     this.length--;
//     return temp;
//   } // O(1)
// }

// const myQueue = new Queue(["a", 0]);
// myQueue.enqueue(["b", 1]);
// console.log(myQueue.length);
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
// class Queue {
//   #head;
//   #last;
//   #size;
//   constructor() {
//     this.#head;
//     this.#last;
//     this.#size = 0;
//   }
//   enqueue(value) {
//     var link = { value, next: void 0 };
//     this.#last = this.#head ? (this.#last.next = link) : (this.#head = link);
//     this.#size++;
//   }
//   dequeue() {
//     var temp;
//     return (
//       this.#head &&
//       ((temp = this.#head.value),
//       (this.#head = this.#head.next),
//       this.#size--,
//       temp)
//     );
//   }
//   peek() {
//     return this.#head && this.#head.value;
//   }
//   get length() {
//     return this.#size == null ? 0 : this.#size;
//   }
// }

let myQueue = new Queue();
console.log(myQueue.dequeue());
myQueue.enqueue(["b", 1]);
const [gene, level] = myQueue.dequeue();
console.log(gene, level);
myQueue.enqueue(20);
myQueue.enqueue(-10);
// console.log(myQueue.length);
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.length);
