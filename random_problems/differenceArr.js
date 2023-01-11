function differenceArray(arr, queries) {
  const n = arr.length,
    q = queries.length;
  let diff = Array(n + 1).fill(0);

  for (let i = 0; i < q; i++) {
    const [start, end, val] = queries[i];
    console.log(start, end, val);
    //[2,,,,-2]
    diff[start] += val;
    diff[end + 1] -= val;
  }
  //prefix sum of diff
  for (let i = 1; i < n; i++) diff[i] += diff[i - 1];
  for (let i = 0; i < n; i++) diff[i] += arr[i];
  diff.pop();
  return diff;
}

const array = [4, 5, 6, 7, 9];
const queries = [
  [0, 4, 2],
  [1, 3, 4],
  [2, 3, 1],
];
console.log(differenceArray(array, queries));
