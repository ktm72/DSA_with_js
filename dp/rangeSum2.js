class FenwickTree {
  constructor(nums) {
    let size = nums.length;
    this.tree = new Array(size + 1).fill(0);
    this.nums = new Array(size);
    this.nums = nums;

    for (let i = 0; i < size; i++) {
      this.updateTree(i, nums[i]);
    }
  }
  sum(index) {
    let sum = 0;
    index += 1;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }
  updateTree(index, val) {
    index += 1;
    while (index < this.tree.length) {
      this.tree[index] += val;
      index += index & -index;
    }
  }
  update(index, val) {
    this.updateTree(index, val - this.nums[index]);
    this.nums[index] = val;
  }
  sumRange(left, right) {
    return this.sum(right) - this.sum(left - 1);
  }
}

const ft = new FenwickTree([2, 3, 4, 5, 6]);

console.log(ft.sumRange(0, 0)); // outputs 2
console.log(ft.sumRange(0, 1)); // outputs 5
console.log(ft.sumRange(1, 2)); // outputs 7
console.log(ft.sumRange(2, 4)); // outputs 15
console.log(ft.sumRange(0, 4)); // outputs 20
