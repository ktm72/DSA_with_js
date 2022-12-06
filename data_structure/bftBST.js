//breadth first traversal in BST

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const a = new Node(5);
const b = new Node(3);
const c = new Node(7);
const d = new Node(-2);
const e = new Node(4);
const f = new Node(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//        5
//     3    7
//   -2 4     9

const bft = (root) => {
  //put root on the queue initially
  const queue = [root];
  while (queue.length > 0) {
    //enqueue
    const currNode = queue.shift();
    //getting value here, if needed do operation
    // console.log(currNode.value);
    //breadth first -> left to right on same level
    //check left
    if (currNode.left !== null) {
      //push it to queue as well
      queue.push(currNode.left);
    }
    if (currNode.right !== null) {
      //push it to queue as well
      queue.push(currNode.right);
    }
  }
};

bft(a);

const bfs = (root, target) => {
  //put root on the queue initially
  const queue = [root];
  while (queue.length > 0) {
    //enqueue
    const currNode = queue.shift();
    //getting value here, if needed do operation
    if (currNode.value === target) {
      return true;
    }
    //breadth first -> left to right on same level
    //check left
    if (currNode.left !== null) {
      //push it to queue as well
      queue.push(currNode.left);
    }
    if (currNode.right !== null) {
      //push it to queue as well
      queue.push(currNode.right);
    }
  }
  return false;
};

console.log(bfs(a, -2));
console.log(bfs(a, -3));
console.log(bfs(a, 5));
