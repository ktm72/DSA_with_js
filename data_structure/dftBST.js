//depth first traversal in BST

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

//    a
//  b   c
//d e    f
const dfp = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    //pop currNode from stack
    const curr = stack.pop();
    //do your operation
    console.log(curr.value);
    //add curr's children to the top of the stack
    if (curr.right !== null) {
      stack.push(curr.right);
    }
    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }
};
dfp(a);
//recursive
// const dfp = (root) => {
//   if (root === null) return;
//   console.log(root.value);
//   dfp(root.left);
//   dfp(root.right);
// };
// dfp(a);
// //preorder ->PLR
// const preorder = (root) => {
//   if (root === null) return;
//   console.log(root.value);
//   preorder(root.left);
//   preorder(root.right);
// };
// postorder(a);
// //postorder ->LRP
// const postorder = (root) => {
//   if (root === null) return;
//   postorder(root.left);
//   postorder(root.right);
//   console.log(root.value);
// };
// inorder(a);
// //inorder ->LRP
// const inorder = (root) => {
//   if (root === null) return;
//   inorder(root.left);
//   console.log(root.value);
//   inorder(root.right);
// };
// inorder(a);

// const sumTree = (root) => {
//   const stack = [root];
//   let sum = 0;
//   while (stack.length > 0) {
//     const curr = stack.pop();
//     sum += curr.value;
//     //add curr's children to the top of the stack
//     if (curr.right !== null) {
//       stack.push(curr.right);
//     }
//     if (curr.left !== null) {
//       stack.push(curr.left);
//     }
//   }
//   return sum;
// };
// const sumTree = (root) => {
//   if (root === null) return 0;
//   return sumTree(root.left) + root.value + sumTree(root.right);
// };

// console.log(sumTree(a));
