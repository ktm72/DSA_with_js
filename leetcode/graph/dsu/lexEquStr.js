/**
 *  Given the equivalency information from s1 = "abc" and
 *  s2 = "cde", "acd" and "aab" are equivalent strings of
 * baseStr = "eed", and "aab" is the lexicographically smallest equivalent string of baseStr.
 */
class UnionFind {
  constructor(size) {
    this.root = Array.from({ length: size }, (_, i) => i);
  }
  //return parent index
  find(x) {
    if (x == this.root[x]) {
      return x;
    }
    this.root[x] = this.find(this.root[x]);
    return this.root[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) {
      return;
    }
    if (rootX < rootY) {
      this.root[rootY] = this.root[rootX];
    } else {
      this.root[rootX] = this.root[rootY];
    }
  }
}
function smallestEquivalentString(s1, s2, baseStr) {
  const un = new UnionFind(26);
  for (let i = 0; i < s1.length; i++) {
    un.union(s1[i].charCodeAt() - 97, s2[i].charCodeAt() - 97);
  }
  let ans = "";
  for (const c of baseStr) {
    ans += String.fromCharCode(un.find(c.charCodeAt() - 97) + 97);
  }
  return ans;
}
