// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let currIdx = arr2.indexOf(arr1[i] ** 2);
//     if (currIdx === -1) {
//       return false;
//     }
//     arr2.splice(currIdx, 1);
//   }
//   return true;
// }

//console.log(same([2, 3, 6], [36, 9, 4])); //O(n*2)

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let sequenceCounter1 = {};
//   let sequenceCounter2 = {};

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] * arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
} //O(n)

module.exports = same;
