function duplicateZeros(arr: number[]): void {
  let zeroes = 0,
    n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeroes++;
  }
  let i = n - 1,
    j = n + zeroes - 1;
  while (i != j) {
    swap(arr, n, i, j--);
    if (arr[i] === 0) {
      swap(arr, n, i, j--);
    }
    i--;
  }
}
function swap(arr: number[], n: number, i: number, j: number) {
  if (j < n) arr[j] = arr[i];
}
function duplicateZeros2(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
}
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); //[1,0,0,2,3,0,0,4]
