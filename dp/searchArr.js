function searchArray(matrix, target) {
  //make it 1D matrix, then unique set
  //   const flatArr = matrix.reduce((acc, curr) => acc.concat(curr), []);
  //   const set = new Set(flatArr);
  //   if (set.has(target)) return true;
  //   return false;

  //search every value of 2D matrix
  //   let row = 0,
  //     col = matrix[0].length - 1,
  //     matLen = matrix.length;

  //   while (row < matLen && col >= 0) {
  //     if (matrix[row][col] == target) return true;
  //     else if (matrix[row][col] >= target) col--;
  //     else row++;
  //   }
  //   return false; //O(n+m)
  let rows = matrix.length;
  let cols = matrix[0].length;
  let l = 0,
    h = rows * cols - 1; //l=left, height = h

  while (l <= h) {
    let mid = l + Math.floor((h - l) / 2);

    let tC = mid % cols; //that col
    let tR = Math.floor(mid / cols); //that row
    let val = matrix[tR][tC];
    if (val == target) return true;
    if (val < target) l = mid + 1;
    else h = mid - 1;
  }

  return false; //log(mn)
}

console.log(
  searchArray(
    [
      [1, 3, 5, 7],
      [10, 14, 16, 19],
      [21, 25, 28, 30],
    ],
    13
  )
);
console.log(
  searchArray(
    [
      [1, 3, 5, 7],
      [10, 14, 16, 19],
      [21, 25, 28, 30],
    ],
    21
  )
);
