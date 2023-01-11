//if the sum becomes 0 means till this point we count the max
//the point max isn't changed, is the end of subArray
//starts at the point when sum is positive
function maxSubArray(nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max; //O(n)
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
