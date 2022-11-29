function matrixReshape(mat, r, c) {
  if (mat.length === 0 || r === 0 || c === 0) return mat;
  const row = mat.length,
    col = mat[0].length;
  let result = [];
  //return orginal if dimensions doesn't match
  if (row * col !== r * c) return mat;

  // deconstruct the original array
  let flatArr = mat.reduce((acc, curr) => acc.concat(curr), []); //[[1,2],[3,4]] -> [1,2,3,4]
  //   while (flatArr.length) {
  //     result.push(flatArr.splice(0, c));
  //   }
  while (r--) {
    let len = result.length;
    result.push(flatArr.slice(len * c, len * c + c));
  } //slice is faster, doesn't mutate orginal array
  return result;
} // O(n)

console.log(matrixReshape([], 0, 0));
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    4,
    1
  )
);
