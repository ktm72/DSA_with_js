// class Node {
//   constructor(value) {
//     this.value = value;
//     this.right = null;
//     this.left = null;
//   }
// }
// class BST {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let temp = this.root;
//     while (true) {
//       if (newNode.value === temp.value) return undefined; //throw new Error("Already exists");
//       if (newNode.value < temp.value) {
//         if (temp.left === null) {
//           temp.left = newNode;
//           return this;
//         }
//         temp = temp.left;
//       } else {
//         if (temp.right === null) {
//           temp.right = newNode;
//           return this;
//         }
//         temp = temp.right;
//       }
//     }
//   }

//   contains(value) {
//     if (this.root === null) return false;
//     let temp = this.root;
//     while (temp) {
//       if (value < temp.value) {
//         temp = temp.left;
//       } else if (value > temp.value) {
//         temp = temp.right;
//       } else {
//         return true;
//       }
//     }
//     return false;
//   }
// }
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  //recursive
  insert(value) {
    if (this.value == value) return undefined; //throw new Error("Already exists");
    if (value < this.value) {
      if (this.left === null) {
        this.left = new Node(value);
      }
      this.left.insert(value);
    } else {
      if (this.right === null) {
        this.right = new Node(value);
      }
      this.right.insert(value);
    }
  }
  findMin() {
    //recursive
    // if (this.left) {
    //   return this.left.findMin();
    // } else {
    //   return this.value;
    // }
    //iterative
    let current = this;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }
  //recursive
  delete(value) {
    if (value < this.value && this.left) {
      this.left = this.left.delete(value);
    } else if (value > this.value && this.right) {
      this.right = this.right.delete(value);
    } else {
      if (this.value === value) {
        if (this.right && this.left) {
          let minVal = this.right.findMin();
          this.value = minVal;
          this.right = this.right.delete(minVal);
        } else if (this.left) {
          return this.left;
        } else if (this.right) {
          return this.right;
        } else {
          return null;
        }
      }
    }
    return this;
  }
  find(value) {
    if (this.value == value) {
      return true;
    } else if (value < this.value && this.left != null) {
      return this.left.find(value);
    } else if (value > this.value && this.right != null) {
      return this.right.find(value);
    }
    return false;
  }
  //LPR
  inorder(currentNode) {
    if (currentNode) {
      this.inorder(currentNode.left);
      console.log(currentNode.value);
      this.inorder(currentNode.right);
    }
  }
  //PLR
  preorder(currentNode) {
    if (currentNode) {
      console.log(currentNode.value);
      this.preorder(currentNode.left);
      this.preorder(currentNode.right);
    }
  }
  //LRP
  postorder(currentNode) {
    if (currentNode) {
      this.postorder(currentNode.left);
      this.postorder(currentNode.right);
      console.log(currentNode.value);
    }
  }
  findHeight(currentNode) {
    if (currentNode == null) {
      return -1;
    }
    let leftHeight = this.findHeight(currentNode.left);
    let rightHeight = this.findHeight(currentNode.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root) {
      this.root.insert(value);
    } else {
      this.root = new Node(value);
    }
  }

  delete(value) {
    if (this.root) {
      this.root = this.root.delete(value);
    }
  }
  //contains
  find(value) {
    if (this.root) {
      return this.root.find(value);
    }
    return false;
  }
  inorder() {
    if (this.root) {
      this.root.inorder(this.root);
    }
  }
  preorder() {
    if (this.root) {
      this.root.preorder(this.root);
    }
  }
  postorder() {
    if (this.root) {
      this.root.postorder(this.root);
    }
  }
  findHeight() {
    if (this.root) {
      return this.root.findHeight(this.root);
    }
    return -1;
  }
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(76);
myTree.insert(37);
myTree.insert(73);
myTree.insert(27);
myTree.insert(29);
myTree.delete(37);
console.log(myTree);
console.log(myTree.find(73));
console.log(myTree.findHeight());
// console.log(myTree.contains(37));
