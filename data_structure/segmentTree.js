class SegmentTreeNode {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    this.min = null;
    this.max = null;
  }
}

class SegmentTree {
  constructor(values) {
    this.values = values;
    this.root = this.buildTree(0, values.length - 1);
  }

  buildTree(left, right) {
    if (left > right) {
      return null;
    }

    let root = new SegmentTreeNode(left, right);
    if (left === right) {
      root.min = root.max = this.values[left];
    } else {
      let mid = left + Math.floor((right - left) / 2);
      root.left = this.buildTree(left, mid);
      root.right = this.buildTree(mid + 1, right);
      root.min = Math.min(root.left.min, root.right.min);
      root.max = Math.max(root.left.max, root.right.max);
    }

    return root;
  }

  queryMin(left, right) {
    return this.query(left, right, (node) => node.min);
  }

  queryMax(left, right) {
    return this.query(left, right, (node) => node.max);
  }

  query(left, right, selector) {
    let result = selector(this.root);
    if (this.root.left >= left && this.root.right <= right) {
      return result;
    } else if (this.root.left > right || this.root.right < left) {
      return null;
    } else {
      let leftResult = this.query(left, right, selector);
      let rightResult = this.query(left, right, selector);
      return leftResult !== null ? leftResult : rightResult;
    }
  }
}

let tree = new SegmentTree([1, 3, 2, 7, 9, 11]);
console.log(tree.queryMin(1, 3)); // Output: 2
console.log(tree.queryMax(4, 5)); // Output: 11

// class SegmentTree {
//   constructor(invalidValue, aggregate) {
//     this._data = [];
//     this._original = null;
//     this._invalidValue = invalidValue;
//     this._aggregate = aggregate;
//   }
//   //Creates a segment tree using an array passed as element.
//   static indexArray(array, placeholder, aggregate) {
//     const segmentize = function (original, data, lo, hi, idx) {
//       if (lo === hi) {
//         data[idx] = original[lo];
//       } else {
//         var mid = Math.floor((lo + hi) / 2);
//         var left = 2 * idx + 1;
//         var right = 2 * idx + 2;
//         segmentize(original, data, lo, mid, left);
//         segmentize(original, data, mid + 1, hi, right);
//         data[idx] = aggregate(data[left], data[right]);
//       }
//     };
//     let result = [];
//     if (array && array.length) {
//       segmentize(array, result, 0, array.length - 1, 0);
//     }
//     let tree = new SegmentTree(placeholder, aggregate);
//     tree._data = result;
//     tree._original = array;
//     return tree;
//   }

//   //Queries the SegmentTree in given range based on the set aggregate.
//   query(start, end) {
//     if (start > end) {
//       throw new Error("The start index should be smaller by the end index");
//     }
//     const findEl = function (originalArrayStart, originalArrayEnd, current) {
//       if (start > originalArrayEnd) {
//         return this._invalidValue;
//       }
//       if (end < originalArrayStart) {
//         return this._invalidValue;
//       }
//       if (
//         (start === originalArrayStart && end === originalArrayEnd) ||
//         originalArrayStart === originalArrayEnd
//       ) {
//         return this._data[current];
//       }
//       let originalArrayMid = Math.floor(
//         (originalArrayStart + originalArrayEnd) / 2
//       );
//       return this._aggregate(
//         findEl(originalArrayStart, originalArrayMid, 2 * current + 1),
//         findEl(originalArrayMid + 1, originalArrayEnd, 2 * current + 2)
//       );
//     }.bind(this);
//     return findEl(0, this._original.length - 1, 0, this._aggregate);
//   }
// }
