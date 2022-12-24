class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  // Returns the sum of the elements in the range [1, index]
  sum(index) {
    let sum = 0;
    index += 1;

    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }

    return sum;
  }

  // Adds the value 'value' to the element at 'index'
  update(index, value) {
    index += 1;

    while (index < this.tree.length) {
      this.tree[index] += value;
      index += index & -index;
    }
  }
}
class MedianFinder {
  constructor() {
    this.left = new FenwickTree(100000); // Fenwick tree for elements smaller than the median
    this.right = new FenwickTree(100000); // Fenwick tree for elements larger than the median
    this.median = null; // Current median value
  }

  add(value) {
    // If this is the first element, set the median to the value
    if (this.median === null) {
      this.median = value;
      this.left.update(value, 1);
      return;
    }

    // If the value is less than the median, insert it into the left Fenwick tree
    if (value < this.median) {
      this.left.update(value, 1);
    }
    // If the value is greater than the median, insert it into the right Fenwick tree
    else {
      this.right.update(value, 1);
    }

    // Balance the Fenwick trees so that the left tree has one more element than the right tree, or vice versa
    let leftCount = this.left.sum(this.median);
    let rightCount = this.right.sum(this.median - 1);
    if (leftCount > rightCount + 1) {
      this.median -= 1;
      this.left.update(this.median, -1);
      this.right.update(this.median, 1);
    } else if (rightCount > leftCount + 1) {
      this.median += 1;
      this.left.update(this.median, 1);
      this.right.update(this.median, -1);
    }
  }

  findMedian() {
    return this.median;
  }
}

const finder = new MedianFinder();

finder.add(5);
console.log(finder.findMedian()); // outputs 5

finder.add(3);
console.log(finder.findMedian()); // outputs 4

finder.add(7);
console.log(finder.findMedian()); // outputs 5

finder.add(1);
console.log(finder.findMedian()); // outputs 4
//good one but doesn't work
