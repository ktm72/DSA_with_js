// An adjacency list of <node, [neighbor]>
// A `valToNodes map of <value, [node]>
// Iterate from the smallest value to the greatest value, for each value:
// Iterate over every node with this value, union it with its neighbors (with smaller or equal value)
// After this iteration, use a map to calculate the size of each union group
// Then, calculate the number of good paths for current value

// solution 1
// class UnionFind {
//   constructor(n) {
//     this.parent = new Array(n).fill().map((_, i) => i);
//     this.rank = new Array(n).fill(1);
//   }

//   find(x) {
//     if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
//     return this.parent[x];
//   }

//   union(a, b) {
//     const rootA = this.find(a);
//     const rootB = this.find(b);
//     if (rootA === rootB) return;
//     if (this.rank[rootA] > this.rank[rootB]) {
//       this.parent[rootB] = rootA;
//       this.rank[rootA] += this.rank[rootB];
//     } else {
//       this.parent[rootA] = rootB;
//       this.rank[rootB] += this.rank[rootA];
//     }
//   }
// }
// var numberOfGoodPaths = function (vals, edges) {
//   const n = vals.length; // number of nodes
//   //step 1
//   // adjacency list
//   const adj = new Array(n).fill(null).map(() => []);
//   for (const [from, to] of edges) {
//     adj[from].push(to);
//     adj[to].push(from);
//   }

//   //step 2
//   // value-to-nodes map
//     const valToNodes = new Map();
//     for(let i = 0; i < n; i++) {
//         if(!valToNodes.has(vals[i])) {
//             valToNodes.set(vals[i], []);
//         }
//         valToNodes.get(vals[i]).push(i);
//     }
//     let ans = 0;
//     const uf = new UnionFind(n);
//     //step 3
//     // sort the values in ascending order
//     const sortedVals = Array.from(valToNodes.keys()).sort((a, b) => a - b);
//     //step 4
//     for(const val of sortedVals) {
//         const nodes = valToNodes.get(val);
//         // union every node to its neighbors with smaller/same value
//         // calculate the size of each union group
//         const groups = new Map();   // <root, size>
//         for(const node of nodes) {
//             for(const neighbor of adj[node]) {
//                if( vals[neighbor] <= vals[node]) uf.union(node, neighbor);

//             }
//         }

//         // iterate over groups and calculate
//         //the number of good paths for current value
//         for(const node of nodes) {
//             const root = uf.find(node);
//             groups.set(root, (groups.get(root) || 0) + 1);
//             ans += groups.get(root);
//         }
//     }
//     return ans;
// };

// solution 2
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill().map((_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) return;
    this.parent[rootB] = rootA;
  }
}
function numberOfGoodPaths(vals, edges) {
  const n = vals.length; // number of nodes
  //step 1: adjacency list
  const adj = {};
  for (const [from, to] of edges) {
    if (!adj[from]) adj[from] = [];
    if (!adj[to]) adj[to] = [];
    adj[from].push(to);
    adj[to].push(from);
  }
  //step 2: each single node is good path
  let ans = n;
  const uf = new UnionFind(n);
  //step 3: value to nodes
  let vN = [];
  for (let i = 0; i < n; i++) {
    //node, val
    vN.push([i, vals[i]]);
  }
  // sort the values in ascending order
  vN.sort((a, b) => a[1] - b[1]);
  //step 4: count freq , initially 1
  let freq = new Array(n).fill(1);
  for (const [node, _] of vN) {
    let p1 = uf.find(node);
    let a = adj[node] ? adj[node] : [];
    //go through each neighbour of adjcentList
    for (const nei of a) {
      let p2 = uf.find(nei);
      //if neighbour and node' parent are same, just ignore
      if (p1 === p2 || vals[p2] > vals[p1]) {
        continue;
      }
      //values are equal, so there is a good path
      if (vals[p2] === vals[p1]) {
        ans += freq[p1] * freq[p2]; //4+= 1* 1;
        freq[p1] += freq[p2]; //increase freq, 1+1 =2
      }
      uf.union(p1, p2);
    }
  }
  return ans;
}
const vals = [1, 3, 2, 1, 3];
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
];
console.log(numberOfGoodPaths(vals, edges));
