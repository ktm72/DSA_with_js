function roadCount(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (explore(grid, r, c, visited) === true) count += 1;
    }
  }
  return count;
}

const explore = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;
  if (grid[r][c] === "B") return false;
  const pos = r + "," + c;
  //already visited
  if (visited.has(pos)) return false;
  visited.add(pos);
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  //explored all positions
  return true;
};

const localArea = [
  ["B", "R", "B", "B", "B"],
  ["B", "R", "B", "B", "B"],
  ["B", "B", "B", "R", "B"],
  ["B", "B", "R", "R", "B"],
  ["R", "B", "B", "R", "R"],
  ["R", "R", "B", "B", "B"],
];

console.log(roadCount(localArea)); //-> 3
