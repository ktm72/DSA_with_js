//breadth first traversal in BST

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const a = new Node(3);
const b = new Node(5);
const c = new Node(1);
const d = new Node(6);
const e = new Node(2);
const f = new Node(9);
const g = new Node(8);
const h = new Node(7);
const i = new Node(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;

//        3
//     5     1
//   6  2   9 8
//     7 4
class PseudoQueue {
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
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
const bft = (root) => {
  //put root on the queue initially
  const arr = [];
  let queue = new PseudoQueue();
  queue.enqueue(root);
  while (!queue.isEmpty) {
    //enqueue
    const currNode = queue.dequeue();
    //getting value here, if needed do operation
    // console.log(currNode.value)
    if (!currNode.left && !currNode.right) {
      arr.push(currNode.value);
    }
    //breadth first -> left to right on same level
    //check left
    if (currNode.left !== null) {
      //push it to queue as well
      queue.enqueue(currNode.left);
    }
    if (currNode.right !== null) {
      //push it to queue as well
      queue.enqueue(currNode.right);
    }
  }
  return arr;
};

console.log(bft(a));

// const bfs = (root, target) => {
//   //put root on the queue initially
//   const queue = [root];
//   while (queue.length > 0) {
//     //enqueue
//     const currNode = queue.shift();
//     //getting value here, if needed do operation
//     if (currNode.value === target) {
//       return true;
//     }
//     //breadth first -> left to right on same level
//     //check left
//     if (currNode.left !== null) {
//       //push it to queue as well
//       queue.push(currNode.left);
//     }
//     if (currNode.right !== null) {
//       //push it to queue as well
//       queue.push(currNode.right);
//     }
//   }
//   return false;
// };

// console.log(bfs(a, -2));
// console.log(bfs(a, -3));
// console.log(bfs(a, 5));
