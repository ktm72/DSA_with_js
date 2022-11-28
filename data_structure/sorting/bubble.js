function Swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubble(array) {
  const len = array.length;
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        Swap(array, j, j + 1);
      }
    }
  }
  //   for (let i = 0; i < len; i++) {
  //     for (let j = 0; j <= i; j++) {
  //       if (array[i] < array[j]) {
  //         Swap(array, i, j);
  //       }
  //     }
  //   }
  return array;
}
console.log(bubble([4, 2, 6, 5, 1, 3]));
