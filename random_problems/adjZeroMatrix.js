var updateMatrix = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let queue = [];
  const range = [
    [-1, 0], //left
    [1, 0], // right
    [0, -1], // down
    [0, 1], //top
  ]; //all direction

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      } else {
        matrix[i][j] = "#";
      }
    }
  }
  for (const [x, y] of queue) {
    range.forEach(([p, q]) => {
      p += x;
      q += y;
      if (0 <= p && p < row && 0 <= q && q < col && matrix[p][q] === "#") {
        matrix[p][q] = matrix[x][y] + 1;
        queue.push([p, q]);
      }
    });
  }
  return matrix;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
); //[[0,0,0],[0,1,0],[1,2,1]]
