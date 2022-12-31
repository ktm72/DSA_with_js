// const gridTraveller = (m, n, memo = {}) => {
//   const key = m + "," + n;
//   if (key in memo) return memo[key];
//   if (m === 1 || n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
//   return memo[key];
// };

function gridTraveller(m: number, n: number) {
  const table: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      const current = table[r][c];
      if (r + 1 <= m) table[r + 1][c] += current; //down move
      if (c + 1 <= n) table[r][c + 1] += current; //right move
    }
  }
  return table[m][n];
}
console.log(gridTraveller(1, 1)); // 1
console.log(gridTraveller(2, 3)); // 3
console.log(gridTraveller(3, 2)); // 3
console.log(gridTraveller(3, 3)); // 6
console.log(gridTraveller(18, 18)); // 2333606220
