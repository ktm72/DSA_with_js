function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
  let adj: { [key: string]: number[] } = {};
  for (let i = 0; i < edges.length; i++) {
    let [child, par] = edges[i];
    if (!adj[par]) adj[par] = [];
    if (!adj[child]) adj[child] = [];
    adj[par].push(child);
    adj[child].push(par);
  }
  return dfs(0, -1);
  function dfs(curr: number, par: number): number {
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
}

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
