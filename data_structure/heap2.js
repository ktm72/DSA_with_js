class Heap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  get size() {
    return this.heap.length;
  }

  // Returns the value at the top of the heap
  peek() {
    return this.heap[0];
  }

  // Adds a value to the heap
  add(value) {
    this.heap.push(value);
    this.bubbleUp(this.size - 1);
  }

  // Removes and returns the value at the top of the heap
  poll() {
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return value;
  }

  // Bubbles up the element at the given index to restore the heap property
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.heap[index], this.heap[parentIndex])) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Bubbles down the element at the given index to restore the heap property
  bubbleDown(index) {
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallestChildIndex = index;
      if (
        leftChildIndex < this.size &&
        this.comparator(
          this.heap[leftChildIndex],
          this.heap[smallestChildIndex]
        )
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size &&
        this.comparator(
          this.heap[rightChildIndex],
          this.heap[smallestChildIndex]
        )
      ) {
        smallestChildIndex = rightChildIndex;
      }
      if (smallestChildIndex !== index) {
        [this.heap[index], this.heap[smallestChildIndex]] = [
          this.heap[smallestChildIndex],
          this.heap[index],
        ];
        index = smallestChildIndex;
      } else {
        break;
      }
    }
  }
}
function maxHeapComparator(a, b) {
  return a > b;
}
