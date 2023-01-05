// get all the permutations

function getPermutations(arr) {
  //not mutating the org arr
  const len = arr.length;
  //shalow copy
  const copyArr = [...arr];
  const output = [];
  const swap = (array, i1, i2) => {
    temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
  };
  const generateHeap = (n, heapArr) => {
    if (n === 1) return output.push([...heapArr]);
    generateHeap(n - 1, heapArr);
    for (let i = 0; i < n - 1; i++) {
      //n is even, swap(hA, i, n-1);
      if (n % 2 === 0) {
        swap(heapArr, i, n - 1);
      } else {
        swap(heapArr, 0, n - 1);
      }
      //heapArr get mutate
      generateHeap(n - 1, heapArr);
    }
  };
  generateHeap(len, copyArr);
  return output;
}

console.log(getPermutations([1, 2]));
