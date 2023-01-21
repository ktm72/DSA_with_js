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
    if (cur_sum < 0) cur_sum = ((cur_sum % k) + k) % k;
    const rem = cur_sum % k;
    res += seen[rem] ?? 0;
    seen[rem] = seen[rem] + 1 || 1;
  }
  return res;
};
var subarraysDivByK = function (nums, k) {
  let freq = new Array(k).fill(0); // "moduloK : Times I've seen it so far"
  freq[0] = 1;
  // This is the accumulative sum of the elements of nums
  let cur_sum = 0;
  // The count of wanted subarrays, whose cur_Sum%K= zero
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    cur_sum = cur_sum + nums[i];
    var rem = cur_sum % k;
    //ALWAYS CHOOSE THE POSITIVE REMAINDER
    if (rem < 0) rem += k;
    count += freq[rem];
    freq[rem]++;
  }
  return count;
};
subarraysDivByK([4, 5, 0, -2, -3, 1], 5); //7
subarraysDivByK([-1, 2, 9], 2); //2
