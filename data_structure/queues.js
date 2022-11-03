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
//       this.tail = newNode;
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

let myQueue = new Queue();
myQueue.enqueue(["b", 1]);
console.log(myQueue.length);
const [gene, level] = myQueue.dequeue();
console.log(gene, level);
