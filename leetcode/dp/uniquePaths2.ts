/**
 * m x n integer array grid
 * only move either down or right at any point in time.
 * obstacle -> 1 and space-> 0 in grid.
 * @param obstacleGrid
 * @returns num of ways to reach
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rows: number = obstacleGrid.length;
  const cols: number = obstacleGrid[0].length;
  //base case
  if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1)
    return 0;
  const dp: number[][] = Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(0));
  //1 way to reach
  dp[0][0] = 1;
  //without obstacles all dp cells is 1
  for (let i = 1; i < rows; i++) {
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }
  for (let i = 1; i < cols; i++) {
    if (obstacleGrid[0][i] === 1) break;
    dp[0][i] = 1;
  }
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (obstacleGrid[r][c] === 1) continue;
      else {
        dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
      }
    }
  }
  // console.log(dp);
  return dp[rows - 1][cols - 1];
}

function uniquePathsObstacles(obstacleGrid: number[][]): number {
  const rows: number = obstacleGrid.length;
  const cols: number = obstacleGrid[0].length;
  return uniquePaths(rows, cols);
  function uniquePaths(
    m: number,
    n: number,
    memo: { [key: string]: number } = {}
  ) {
    let pair: string = `${m}:${n}`;
    if (memo[pair]) return memo[pair];
    //base case
    if (m === 0 || n === 0) return 0;
    if (obstacleGrid[m - 1][n - 1] == 1) return 0;
    if (m === 1 && n === 1) return 1;
    memo[pair] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    return memo[pair];
  }
} //slow
