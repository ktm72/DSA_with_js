/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let seen = { 0: 1 };
  let res = 0,
    cur_sum = 0;
  for (let i = 0; i < nums.length; i++) {
    cur_sum += nums[i];
    //negative numbers
    if (cur_sum < 0) cur_sum += k;
    const rem = cur_sum % k;
    res += seen[rem] ? seen[rem] : 0;
    seen[rem] = seen[rem] + 1 || 1;
  }
  return res;
};
subarraysDivByK([4, 5, 0, -2, -3, 1], 5); //7
subarraysDivByK([-1, 2, 9], 2); //2
