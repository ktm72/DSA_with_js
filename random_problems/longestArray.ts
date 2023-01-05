function longestArray(array: number[][]): number[] {
  return array.reduce(
    (acc, curr) => (acc.length > curr.length ? acc : curr),
    []
  );
}

const slices = [[1, 2, 3], [2, 3, 3, 3, 3], [3, 4], [5], [1, 1, 1, 1]];
console.log(longestArray(slices)); //[2,3,3,3,3]
