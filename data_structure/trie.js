// class Node {
//   constructor() {
//     this.children = {};
//     this.isWordEnd = false;
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new Node();
//   }
//   insert(word) {
//     let curr = this.root;
//     for (let i = 0; i < word.length; i++) {
//       let ch = word[i];
//       if (!(ch in curr.children)) {
//         curr.children[ch] = new Node();
//       }
//       curr = curr.children[ch];
//     }
//     curr.isWordEnd = true;
//   }
//   contains(word) {
//     let curr = this.root;
//     for (let i = 0; i < word.length; i++) {
//       let ch = word[i];
//       if (!(ch in curr.children)) {
//         return false;
//       }
//       curr = curr.children[ch];
//     }
//     return curr.isWordEnd;
//   }
//   startsWithPrefix(prefix) {
//     let curr = this.root;
//     for (let i = 0; i < prefix.length; i++) {
//       let ch = prefix[i];
//       if (!(ch in curr.children)) {
//         return false;
//       }
//       curr = curr.children[ch];
//     }
//     return true;
//   }
// }
class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let currNode = this.root;
    for (let ch of word) {
      if (!(ch in currNode)) {
        currNode[ch] = {};
      }
      currNode = currNode[ch];
    }
    currNode.isWordEnd = true; //end of node{} have isWordEnd
  }
  traverse(word) {
    let currNode = this.root;
    for (let ch of word) {
      currNode = currNode[ch];
      if (!currNode) return null;
    }
    return currNode;
  }
  //contains
  search(word) {
    const currNode = this.traverse(word);
    return currNode != null && currNode.isWordEnd === true;
  }
  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

const myTrie = new Trie();

myTrie.insert("word");
console.log(myTrie);
console.log(myTrie.search("word"));
console.log(myTrie.startsWith("w"));
