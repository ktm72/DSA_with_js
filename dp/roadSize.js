function roadCount(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const size = explore(grid, r, c, visited);
      if (size > 0 && size < minSize) minSize = size;
    }
  }
  return minSize;
}

const explore = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;
  if (grid[r][c] === "B") return 0;
  const pos = r + "," + c;
  //already visited
  if (visited.has(pos)) return 0;
  visited.add(pos);
  let size = 1;
  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);
  //explored all positions
  return size;
};

const localArea = [
  ["B", "R", "B", "B", "B"],
  ["B", "R", "B", "B", "B"],
  ["B", "B", "B", "R", "B"],
  ["B", "B", "R", "R", "B"],
  ["R", "B", "B", "R", "R"],
  ["R", "R", "B", "B", "B"],
];

console.log(roadCount(localArea)); //-> 5
