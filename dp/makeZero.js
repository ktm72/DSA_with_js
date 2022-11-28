/**
 *
 * @param {*} nums
 * @returns num of operations to make all elm 0
 */

function minimumOperations(nums) {
  //   if (nums.length === 0) {
  //     return 0;
  //   }
  //   nums.sort((a, b) => a - b);
  //   let count = 0;
  //   let sum = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     // remove 0 from array
  //     if (!nums[i]) continue;
  //     if (nums[i]) {
  //       if (nums[i] - sum > 0) {
  //         count++;
  //         sum = nums[i];
  //       }
  //       nums[i] = nums[i] - sum;
  //     }
  //   }
  //   return count;
  return new Set(nums.filter((x) => x !== 0)).size;
} // O(n)

console.log(minimumOperations([0, 1, 4, 3, 2, 5]));
console.log(minimumOperations([0, 1, 4, 0, 2, 5]));
console.log(minimumOperations([1, 5, 0, 3, 5]));
