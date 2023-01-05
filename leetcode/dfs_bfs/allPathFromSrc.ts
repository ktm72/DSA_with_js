function allPathsSourceTarget(graph: number[][]): number[][] {
  const n: number = graph.length;
  // let queue:[[number,number[]]] = [[0,[0]]];
  let paths: number[][] = [];
  // while(queue.length){
  //     const [node, path]:[number,number[]]= queue.shift();
  //     //reached there
  //     if(node === n -1) paths.push(path);
  //     for(let neighbour of graph[node]){
  //         queue.push([neighbour, [...path, neighbour]]);
  //     }
  // }
  const dfs = (node: number, path: number[]) => {
    //base case
    if (node === n - 1) return paths.push(path);
    //until, go through each of the edges
    for (let neighbour of graph[node]) {
      dfs(neighbour, [...path, neighbour]);
    }
  };
  //start, path
  dfs(0, [0]);
  return paths;
}
