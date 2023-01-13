var minTime = function (n, edges, hasApple) {
  let adj = {};
  for (let i = 0; i < edges.length; i++) {
    let [child, par] = edges[i];
    if (!adj[par]) adj[par] = [];
    if (!adj[child]) adj[child] = [];
    adj[par].push(child);
    adj[child].push(par);
  }
  return dfs(0, -1);
  function dfs(curr, par) {
    let time = 0;
    for (let child of adj[curr]) {
      if (child === par) continue;
      let childTime = dfs(child, curr);
      if (childTime || hasApple[child]) {
        time += 2 + childTime;
      }
    }
    return time;
  }
};

var minTime1 = function (n, edges, hasApple) {
  const appleNodes = [];
  for (let i = 1; i < hasApple.length; i++) {
    if (hasApple[i]) {
      appleNodes.push(i);
    }
  }
  const adjlist = [];
  for (const [from, to] of edges) {
    adjlist[to] = from;
  }
  const visited = new Set();
  let times = 0;
  //console.log(adjlist, appleNodes)
  for (const node of appleNodes) {
    visited.add(node);
    let src = adjlist[node];
    times += 2;
    while (src != 0 && !visited.has(src)) {
      visited.add(src);
      src = adjlist[src];
      times += 2;
    }
  }
  return times;
}; //fast

const n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, true, false, false, true, false];
console.log(minTime(n, edges, hasApple));
