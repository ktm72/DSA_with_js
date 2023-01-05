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
const ft = new FenwickTree(5);

ft.update(0, 2);
ft.update(1, 3);
ft.update(2, 4);
ft.update(3, 5);
ft.update(4, 6);

console.log(ft.sum(0)); // outputs 2
console.log(ft.sum(1)); // outputs 5
console.log(ft.sum(2)); // outputs 9
console.log(ft.sum(3)); // outputs 14
console.log(ft.sum(4)); // outputs 20
