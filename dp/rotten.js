function roadCount(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let queue = [];
  let time = -1,
    fresh = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) queue.push([r, c]);
    }
  }
  const range = [
    [-1, 0], //left
    [1, 0], // right
    [0, -1], // down
    [0, 1], //top
  ]; //all direction
  while (queue.length) {
    time += 1; //time will start as soon as loop start
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      range.forEach(([p, q]) => {
        p += x;
        q += y;
        if (0 <= p && p < row && 0 <= q && q < col && grid[p][q] === 1) {
          grid[p][q] = 2;
          queue.push([p, q]);
          fresh--;
        }
      });
    }
  }

  return fresh === 0 ? time : -1;
}

//2-> rotten, 1-> fresh, 0-> empty
const orangeBucket = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(roadCount(orangeBucket)); //-> 5
