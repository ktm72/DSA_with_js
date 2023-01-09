/**
 * count number of subarray of a given sum
 * @param {*} target :number
 * @param {*} nums :number[]
 * @returns
 */
function countSubArray(target, nums) {
  const n = nums.length;
  let map = new Map();
  let count = 0,
    sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (sum === target) {
      count++;
    }
    if (map.has(sum - target)) {
      count += map.get(sum - target);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return count;
}

console.log(countSubArray(0, [4, 1, 3, -2, -1])); // 1
console.log(countSubArray(0, [-4, 1, 3, -2, -1])); //2
