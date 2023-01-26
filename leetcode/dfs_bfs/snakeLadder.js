/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  // const N = board.length;
  // const getLoc = (pos) => {
  //   let row = Math.floor((pos - 1) / N);
  //   let col = (pos - 1) % N;
  //   col = row % 2 === 1 ? N - col - 1 : col;
  //   row = N - row - 1;
  //   return [row, col];
  // };
  // //bfs
  // const q = [1]; //queue
  // const v = { 1: 0 }; //visited
  // while (q.length) {
  //   const n = q.shift();
  //   if (n === N * N) return v[n];
  //   for (let i = n + 1; i <= Math.min(n + 6, N * N); i++) {
  //     //row, col of that location
  //     const [r, c] = getLoc(i);
  //     const next = board[r][c] === -1 ? i : board[r][c];
  //     if (v[next] === undefined) {
  //       q.push(next);
  //       v[next] = v[n] + 1;
  //     }
  //   }
  // }

  let n = board.length;
  let visited = new Set();
  let getPos = (pos) => {
    let row = Math.floor((pos - 1) / n);
    let col = (pos - 1) % n;
    col = row % 2 === 1 ? n - 1 - col : col; //even-> l to r, odd -> r to l
    row = n - 1 - row; //6-0-1
    return [row, col];
  };

  let q = [[1, 0]];
  while (q.length > 0) {
    let [pos, moves] = q.shift();
    for (let i = 1; i <= 6; i++) {
      let nextPos = i + pos;
      let [r, c] = getPos(nextPos);
      if (board[r][c] !== -1) nextPos = board[r][c];
      if (nextPos == n * n) return moves + 1;
      if (!visited.has(nextPos)) {
        visited.add(nextPos);
        q.push([nextPos, moves + 1]);
      }
    }
  }
  return -1;
};
