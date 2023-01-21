/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let cur_sum = 0,
    m = { 0: -1 };
  for (let i = 0; i < nums.length; i++) {
    cur_sum += nums[i];
    cur_sum %= k; //reminder
    if (cur_sum in m) {
      if (i - m[cur_sum] > 1) return true;
    } else {
      m[cur_sum] = i;
    }
  }
  return false;
};
