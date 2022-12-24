class MedianFinder {
  constructor() {
    this.smaller = new Heap((a, b) => a < b); // Max-heap for the smaller half of the numbers
    this.larger = new Heap((a, b) => a > b); // Min-heap for the larger half of the numbers
  }

  add(value) {
    // Insert the value into the appropriate heap
    if (this.smaller.size === 0 || value <= this.smaller.peek()) {
      this.smaller.add(value);
    } else {
      this.larger.add(value);
    }

    // Balance the heaps
    if (this.smaller.size > this.larger.size + 1) {
      this.larger.add(this.smaller.poll());
    } else if (this.larger.size > this.smaller.size + 1) {
      this.smaller.add(this.larger.poll());
    }
  }

  findMedian() {
    if (this.smaller.size === this.larger.size) {
      return (this.smaller.peek() + this.larger.peek()) / 2;
    } else {
      return this.smaller.size > this.larger.size
        ? this.smaller.peek()
        : this.larger.peek();
    }
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
