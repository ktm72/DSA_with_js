function Swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
function selection(array) {
  let min = null;
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) Swap(array, i, min);
  }
  return array;
}

console.log(selection([4, 2, 6, 5, 1, 3]));
