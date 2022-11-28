function maxSubArray(nums) {
  let max_sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    max_sum = Math.max(max_sum, nums[i]);
  }
  return max_sum;
  // let max = nums[0];
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  //   if (sum > max) {
  //     max = sum;
  //   }
  //   if (sum < 0) {
  //     sum = 0;
  //   }
  // }
  // return max; //O(n), slower one
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
