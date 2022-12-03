class MinHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  // helper method --> start
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }
  leftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }
  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  } // helper method --> end
  heapifyUp(index) {
    // while (this.hasParent(index) && this.parent(index) > this.storage[index]) {
    //   //swap data
    //   this.swap(this.getParentIndex(index), index);
    //   //index changed to parent index
    //   index = this.getParentIndex(index);
    // }
    //recursive
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(this.getParentIndex(index), index);
      this.heapifyUp(this.getParentIndex(index));
    }
  }
  heapifyDown(index) {
    // while (this.hasLeftChild(index)) {
    //   let smallerChildIndex = this.getLeftChildIndex(index);
    //   if (
    //     this.hasRightChild(index) &&
    //     this.rightChild(index) < this.leftChild(index)
    //   ) {
    //     smallerChildIndex = this.getRightChildIndex(index);
    //   }
    //   if (this.storage[index] < this.storage[smallerChildIndex]) break;
    //   else {
    //     this.swap(index, smallerChildIndex);
    //   }
    //   index = smallerChildIndex;
    // }
    //recursive
    let smallest = index;
    if (
      this.hasLeftChild(index) &&
      this.storage[smallest] > this.leftChild(index)
    ) {
      smallest = this.getLeftChildIndex(index);
    }
    if (
      this.hasRightChild(index) &&
      this.storage[smallest] > this.rightChild(index)
    ) {
      smallest = this.getRightChildIndex(index);
    }
    //index is the current node
    if (smallest != index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  //
  insert(data) {
    this.storage[this.size] = data;
    this.size++;
    this.heapifyUp(this.size - 1);
  }
  //removes the top most min value
  removeMin() {
    if (this.size === 0) return undefined; //throw new Error("Empty Heap");
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.storage.pop();
    this.size--;
    this.heapifyDown(0);
    return data;
  }
}

const binaryHeap = new MinHeap();
binaryHeap.insert(10);
binaryHeap.insert(20);
binaryHeap.insert(5);
binaryHeap.insert(8);
binaryHeap.insert(0);
binaryHeap.insert(15);
binaryHeap.insert(30);

binaryHeap.removeMin();
console.log(binaryHeap.removeMin());
console.log(binaryHeap);
