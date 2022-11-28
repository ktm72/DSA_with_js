function merge(arr1, arr2) {
  let combined = [],
    i = 0,
    j = 0;
  const len1 = arr1.length;
  const len2 = arr2.length;
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }
  while (i < len1) {
    combined.push(arr1[i]);
    i++;
  }
  while (j < len2) {
    combined.push(arr2[j]);
    j++;
  }
  return combined;
}
// console.log(merge([4, 2, 6], [5, 1, 3]));
function mergeSort(array) {
  let len = array.length;
  if (len === 1) return array; //base case
  let mid = Math.floor(len / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([3, 1, 4, 2]));
