const dirs: number[][] = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
/**
 * m x n integer array grid
 * starting ->1, obstacles -> -1, path->0, end-> 2
 * walk over every non-obstacle square exactly once.
 * @param grid
 * @returns num of ways to reach end, walking over all the paths
 */
function uniquePathsIII(grid: number[][]): number {
  let ways: number = 0,
    traversable: number = 1,
    sx: number = -1,
    sy: number = -1;
  const rows: number = grid.length,
    cols: number = grid[0].length;
  let visited = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(false));
  //count traversable 0 first and find the starting point
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] == 0) traversable++;
      else if (grid[r][c] == 1) {
        sx = r;
        sy = c;
      }
    }
  }
  //depth first search from the starting point
  dfs(sx, sy, 0);
  return ways;
  function dfs(r: number, c: number, currTraverse: number) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === -1 ||
      visited[r][c]
    )
      return;
    if (grid[r][c] === 2) {
      if (currTraverse === traversable) ways++;
      return;
    }
    //currently visiting this cell
    visited[r][c] = true;

    for (let [dx, dy] of dirs) {
      dfs(r + dx, c + dy, currTraverse + 1);
    }
    //after doing processing, i can visit the same cell in diff path
    visited[r][c] = false;
  }
}

function uniquePathsWays(grid: number[][]): number {
  let ways: number = 0,
    traversable: number = 1,
    sx: number = -1,
    sy: number = -1;
  const rows: number = grid.length,
    cols: number = grid[0].length;
  //count traversable 0 first and find the starting point
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] == 0) traversable++;
      else if (grid[r][c] == 1) {
        sx = r;
        sy = c;
      }
    }
  }
  //depth first search from the starting point
  dfs(sx, sy);
  console.log(grid);
  return ways;
  function dfs(r: number, c: number) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === -1) return;
    if (grid[r][c] === 2) {
      //traversable becomes 0, means all path has been visited
      if (!traversable) ways++;
      return;
    }
    const cell: number = grid[r][c];
    //currently visiting this cell
    (grid[r][c] = -1), traversable--;
    for (let [dx, dy] of dirs) {
      dfs(r + dx, c + dy);
    }
    //after doing processing, i can visit the same cell in diff path
    (grid[r][c] = cell), traversable++;
  }
}
