//rank + path compression
// class UnionFind {
//   constructor(size) {
//     this.root = Array.from({ length: size }).map((_, i) => i);
//     //with rank
//     // this.rank = Array.from({ length: size }).map((_, i) => 1);
//     this.groups = size;
//   }
//   find(x) {
//     if (x === this.root[x]) return x;
//     return (this.root[x] = this.find(this.root[x]));
//   }
//   union(x, y) {
//     let rootX = this.find(x),
//       rootY = this.find(y);
//     if (rootX !== rootY) {
//       this.groups--;
//       //without rank
//       this.root[rootY] = rootX;
//       //with rank
//       //   if (this.rank[rootX] > this.rank[rootY]) {
//       //     this.root[rootY] = rootX;
//       //   } else if (this.rank[rootX] < this.rank[rootY]) {
//       //     this.root[rootX] = rootY;
//       //   } else {
//       //     this.root[rootX] = rootY;
//       //     this.rank[rootY]++;
//       //   }
//     }
//   }
// }

// var findCircleNum = function (isConnected) {
//   let n = isConnected.length,
//     uf = new UnionFind(n);

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (isConnected[i][j]) uf.union(i, j);
//     }
//   }
//   return uf.groups;
// };

function findCircleNum(isConnected) {
  let provinces = 0,
    visited = new Set();
  function dfs(connections) {
    for (const [anotherCity, isInConnection] of connections.entries()) {
      if (isInConnection && !visited.has(anotherCity)) {
        visited.add(anotherCity);
        dfs(isConnected[anotherCity]);
      }
    }
  }

  //vertex = city, connections
  for (const [city, connections] of isConnected.entries()) {
    if (!visited.has(city)) {
      provinces++;
      dfs(connections);
    }
  }
  return provinces;
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
