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

function levelOrder(root) {
  if (!root) return [];
  const arr = [];
  //   let queue = [root];
  //   while (queue.length) {
  //     let len = queue.length;
  //     arr.push(queue.map((node) => node.value));
  //     while (len--) {
  //       const currNode = queue.shift();
  //       if (currNode.left !== null) {
  //         queue.push(currNode.left);
  //       }
  //       if (currNode.right !== null) {
  //         queue.push(currNode.right);
  //       }
  //     }
  //   }
  function order(root, level = 0) {
    if (!root) return null;
    if (arr[level]) {
      arr[level].push(root.value);
    } else {
      arr[level] = [root.value];
    }
    order(root.left, level + 1);
    order(root.right, level + 1);
  }
  order(root);
  return arr;
}
console.log(levelOrder(a));
