class Heap {
  constructor(type) {
    this.type = type;
    this.storage = [];
    this.size = 0;
  }
  // helper method --> start
  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  _getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  _getRightChildIndex(index) {
    return 2 * index + 2;
  }
  _hasParent(index) {
    return this._getParentIndex(index) >= 0;
  }
  _hasLeftChild(index) {
    return this._getLeftChildIndex(index) < this.size;
  }
  _hasRightChild(index) {
    return this._getLeftChildIndex(index) < this.size;
  }
  _parent(index) {
    return this.storage[this._getParentIndex(index)];
  }
  _leftChild(index) {
    return this.storage[this._getLeftChildIndex(index)];
  }
  _rightChild(index) {
    return this.storage[this._getRightChildIndex(index)];
  }
  _swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }
  _compare(parent, child) {
    if (this.type === "min") {
      return parent - child;
    } else if (this.type === "max") {
      return child - parent;
    }
  }
  // helper method --> end
  heapifyUp(childIndex) {
    // while (this.hasParent(index) && this.parent(index) > this.storage[index]) {
    //   //swap data
    //   this.swap(this.getParentIndex(index), index);
    //   //index changed to parent index
    //   index = this.getParentIndex(index);
    // }
    //recursive
    if (
      this._hasParent(childIndex) &&
      this._compare(this._parent(childIndex), this.storage[childIndex]) > 0
    ) {
      this._swap(this._getParentIndex(childIndex), childIndex);
      this.heapifyUp(this._getParentIndex(childIndex));
    }
  }

  heapifyDown(parentIndex) {
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
    let top = parentIndex; //min heap parentIndex =smallest, max heap parentIndex = largest
    if (
      this._hasLeftChild(parentIndex) &&
      this._compare(this.storage[top], this._leftChild(parentIndex)) > 0
    ) {
      top = this._getLeftChildIndex(parentIndex);
    }
    if (
      this._hasRightChild(parentIndex) &&
      this._compare(this.storage[top], this._rightChild(parentIndex)) > 0
    ) {
      top = this._getRightChildIndex(parentIndex);
    }
    //index is the current node
    if (top != parentIndex) {
      this._swap(parentIndex, top);
      this.heapifyDown(top);
    }
  }

  //
  insert(data) {
    this.storage[this.size] = data;
    this.size++;
    this.heapifyUp(this.size - 1);
  }
  //removes the top most min/max value
  removeTop() {
    if (this.size === 0) return undefined; //throw new Error("Empty Heap");
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.storage.pop();
    if (this.size > 1) this.heapifyDown(0);
    this.size--;
    return data;
  }
}

const binaryHeap = new Heap("min");
binaryHeap.insert(1);
binaryHeap.insert(12);
binaryHeap.insert(9);
binaryHeap.insert(10);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.insert(30);

binaryHeap.removeTop();
console.log(binaryHeap.removeTop());
console.log(binaryHeap);
