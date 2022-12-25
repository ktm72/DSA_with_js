class SegmentTreeNode {
  constructor(left, right, min = null, max = null) {
    this.left = left;
    this.right = right;
    this.min = min;
    this.max = max;
  }
}
class SegmentTree {
  constructor(values) {
    this.values = values;
    this.nodes = this.buildTree(0, values.length - 1);
  }

  buildTree(left, right) {
    if (left === right) {
      return [
        new SegmentTreeNode(left, right, this.values[left], this.values[left]),
      ];
    }

    let mid = left + Math.floor((right - left) / 2);
    let leftNodes = this.buildTree(left, mid);
    let rightNodes = this.buildTree(mid + 1, right);
    let min = Math.min(leftNodes[0].min, rightNodes[0].min);
    let max = Math.max(leftNodes[0].max, rightNodes[0].max);
    let root = new SegmentTreeNode(left, right, min, max);
    return [root, ...leftNodes, ...rightNodes];
  }

  query(left, right, selector) {
    let nodes = this.nodes.filter(
      (node) => node.left >= left && node.right <= right
    );
    return selector(nodes);
  }

  queryMin(left, right) {
    return this.query(left, right, (nodes) =>
      Math.min(...nodes.map((node) => node.min))
    );
  }

  queryMax(left, right) {
    return this.query(left, right, (nodes) =>
      Math.max(...nodes.map((node) => node.max))
    );
  }
}

// Unit tests

let tree = new SegmentTree([1, 3, 2, 7, 9, 11]);
console.log(tree.queryMin(1, 3) === 2);
console.log(tree.queryMax(4, 5) === 11);
console.log(tree.queryMin(0, 5) === 1);
console.log(tree.queryMax(0, 5) === 11);
console.log(tree.queryMin(2, 4) === 2);
console.log(tree.queryMax(2, 4) === 9);

tree = new SegmentTree([-1, 0, 1, 2, 3, 4]);
console.log(tree.queryMin(1, 3) === 0);
console.log(tree.queryMax(4, 5) === 4);
console.log(tree.queryMin(0, 5) === -1);
console.log(tree.queryMax(0, 5) === 4);
console.log(tree.queryMin(2, 4) === 1);
console.log(tree.queryMax(2, 4) === 3);

// let tree = new SegmentTree([1, 3, 2, 7, 9, 11]);
// console.log(tree);
// console.log(tree.queryMin(0, 5)); // Output: 1
// console.log(tree.queryMax(0, 5)); // Output: 11
// console.log(tree.queryMin(3, 5)); // Output: 7
// console.log(tree.queryMax(3, 5)); // Output: 11
// console.log(tree.queryMin(1, 3)); // Output: 2
// console.log(tree.queryMax(1, 3)); // Output: 7

// class SegmentTree {
//   constructor(arr) {
//     this.arr = arr;
//     this.tree = new Array(arr.length * 2);
//     this.build(0, arr.length - 1, 1);
//   }

//   build(left, right, node) {
//     if (left === right) {
//       this.tree[node] = this.arr[left];
//       return;
//     }

//     const mid = left + Math.floor((right - left) / 2);
//     this.build(left, mid, node * 2);
//     this.build(mid + 1, right, node * 2 + 1);
//     this.tree[node] = Math.min(this.tree[node * 2], this.tree[node * 2 + 1]);
//   }

//   queryMin(
//     left,
//     right,
//     node = 1,
//     treeLeft = 0,
//     treeRight = this.arr.length - 1
//   ) {
//     if (treeRight < left || right < treeLeft) {
//       return Number.MAX_VALUE;
//     }

//     if (left <= treeLeft && treeRight <= right) {
//       return this.tree[node];
//     }

//     const mid = treeLeft + Math.floor((treeRight - treeLeft) / 2);
//     const leftMin = this.queryMin(left, right, node * 2, treeLeft, mid);
//     const rightMin = this.queryMin(
//       left,
//       right,
//       node * 2 + 1,
//       mid + 1,
//       treeRight
//     );
//     return Math.min(leftMin, rightMin);
//   }

//   update(
//     index,
//     value,
//     node = 1,
//     treeLeft = 0,
//     treeRight = this.arr.length - 1
//   ) {
//     if (treeLeft === treeRight) {
//       this.tree[node] = value;
//       return;
//     }

//     const mid = treeLeft + Math.floor((treeRight - treeLeft) / 2);
//     if (index <= mid) {
//       this.update(index, value, node * 2, treeLeft, mid);
//     } else {
//       this.update(index, value, node * 2 + 1, mid + 1, treeRight);
//     }
//     this.tree[node] = Math.min(this.tree[node * 2], this.tree[node * 2 + 1]);
//   }
// }

// const st = new SegmentTree([1, 3, 2, 7, 9, 11]);
// console.log(st.queryMin(1, 3)); // 2
// st.update(2, 5);
// console.log(st.queryMin(2, 3)); // 5
// console.log(st.queryMin(0, 3)); // 1
// console.log(st.queryMin(1, 2)); // 3
// console.log(st.queryMin(3, 5)); // 7
