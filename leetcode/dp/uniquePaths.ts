function uniquePaths(m: number, n: number): number {
  // const dp: number[][] = new Array(m+1).fill(null).map(()=> Array(n+1).fill(0));
  // //from grid 1 we can reach 1 way;
  // dp[1][1] =1;
  // for(let r = 1; r<=m; r++){
  //     for(let c = 1; c<=n; c++){
  //         const current = dp[r][c];
  //         if(c+1 <=n) dp[r][c+1] +=current;
  //         if(r+1<= m) dp[r+1][c] +=current;
  //     }
  // }
  // return dp[m][n];
  const dp: number[][] = new Array(m).fill(null).map(() => Array(n).fill(1));
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1]; //reverse calculation
    }
  }
  // console.log(dp);
  return dp[m - 1][n - 1];
}
