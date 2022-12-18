//dynamic programming
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  if (n === 1) return matrix[0][0]; //base case
  //start at 2nd last row, upto top
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      //next row, left col
      let a = 0 <= j - 1 ? matrix[i + 1][j - 1] : Infinity,
        //next row, same col
        b = matrix[i + 1][j],
        //next row, right col
        c = j + 1 < n ? matrix[i + 1][j + 1] : Infinity;
      //update min value
      matrix[i][j] += Math.min(a, b, c);
    }
  }
  //return the min val from the first row
  return Math.min(...matrix[0]);
};
//bottom-up
let minFallingPathSum = (matrix) => {
  let [row, col] = [matrix.length, matrix[0].length];
  for (let i = 1; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      //outer boundary val infinity
      let a = 0 <= j - 1 ? matrix[i - 1][j - 1] : Infinity,
        b = matrix[i - 1][j],
        c = j + 1 < col ? matrix[i - 1][j + 1] : Infinity;
      matrix[i][j] += Math.min(a, b, c);
    }
  }
  return Math.min(...matrix[row - 1]);
};
//memo
let minFallingPathSum = (A, m = new Map()) => {
  let [row, col] = [A.length, A[0].length];
  let go = (i, j) => {
    if (j < 0 || j == col) return Infinity;
    if (!i) return A[i][j];
    let k = `${i},${j}`;
    if (!m.has(k)) {
      let a = go(i - 1, j - 1),
        b = go(i - 1, j),
        c = go(i - 1, j + 1);
      m.set(k, A[i][j] + Math.min(a, b, c));
    }
    return m.get(k);
  };
  let min = Infinity;
  for (let j = 0; j < col; ++j) min = Math.min(min, go(row - 1, j));
  return min;
};
