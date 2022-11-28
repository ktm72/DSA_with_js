function Swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function pivot(array, pivotIdx = 0, endIdx = array.length - 1) {
  let swapIdx = pivotIdx;
  for (let i = pivotIdx + 1; i <= endIdx; i++) {
    if (array[i] < array[pivotIdx]) {
      swapIdx++;
      Swap(array, swapIdx, i);
    }
  }
  Swap(array, pivotIdx, swapIdx);
  return swapIdx;
}
// console.log(pivot([4, 2, 6, 5, 1, 3]));

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(array, left, right);
    quickSort(array, left, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, right);
  }
  return array;
}

console.log(quickSort([4, 2, 6, 5, 1, 3]));
