//each num in arr have to have unique occurrences
function uniqueOccurrences(arr) {
  const obj = {};

  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  // const output = Object.values(obj);
  // return output.length == new Set(output).size;

  const output = new Set();
  for (let i in obj) {
    //set contains unique val
    //if a val exists in set
    if (output.has(obj[i])) {
      //it doesn't have unique occurrences
      return false;
    } else {
      output.add(obj[i]);
    }
  }
  return true;
}
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
