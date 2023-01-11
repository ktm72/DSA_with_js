class TrieNode {
  children: object = {};
  isWordEnd: boolean = false;
}

class TrieDs {
  root = new TrieNode();
  insert(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (!(ch in curr.children)) {
        curr.children[ch] = new TrieNode();
      }
      curr = curr.children[ch];
    }
    curr.isWordEnd = true;
  }
  traverse(word: string) {
    let currNode = this.root;
    for (let ch of word) {
      currNode = currNode.children[ch];
      if (!currNode.children) return null;
    }
    return currNode;
  }
  search(word: string): boolean {
    const currNode = this.traverse(word);
    return currNode != null && currNode.isWordEnd === true;
  }

  startsWith(prefix: string): boolean {
    return this.traverse(prefix) != null;
  }
}
