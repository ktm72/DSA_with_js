function insertion(array) {
  let value = null,
    len = array.length;
  for (let i = 1; i < len; i++) {
    // i -> unsorted
    value = array[i]; //current value
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      //j -> sorted
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
}
console.log(insertion([4, 2, 6, 5, 1, 3]));
