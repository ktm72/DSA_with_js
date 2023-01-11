function twoDPrefix(mat) {
  const row = mat.length,
    col = mat[0].length;
  let pre = Array(row)
    .fill(null)
    .map((_) => Array(col).fill(0));
  pre[0][0] = mat[0][0];
  //prefix sum of 1st row
  for (let i = 1; i < col; i++) {
    pre[0][i] = pre[0][i - 1] + mat[0][i];
  }
  //prefix sum of 1st col
  for (let i = 1; i < row; i++) {
    pre[i][0] = pre[i - 1][0] + mat[i][0];
  }
  for (let r = 1; r < row; r++) {
    for (let c = 1; c < col; c++) {
      pre[r][c] = pre[r][c - 1] + pre[r - 1][c] + mat[r][c] - pre[r - 1][c - 1];
    }
  }

  return pre;
}

const mat = [
  [4, 5, 6, 7],
  [2, 4, 5, 6],
  [3, 6, 7, 9],
  [1, 4, 8, 0],
];

console.log(twoDPrefix(mat));
