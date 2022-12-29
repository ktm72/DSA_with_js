//circular housing
var rob = function (nums) {
  let n = nums.length;
  if (n < 2) return n ? nums[0] : 0;
  // function helper(nums) {
  //   let rob1 = 0,
  //     rob2 = 0;
  //   for (let n of nums) {
  //     newRob = Math.max(rob1 + n, rob2);
  //     rob1 = rob2;
  //     rob2 = newRob;
  //   }
  //   return rob2;
  // }
  //1st and last house is the same house
  // return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)));
  return Math.max(helper(nums, 0, n - 2), helper(nums, 1, n - 1));
  function helper(nums, l, r) {
    let rob1 = 0,
      rob2 = 0;
    for (let i = l; i <= r; i++) {
      newRob = Math.max(rob1 + nums[i], rob2);
      rob1 = rob2;
      rob2 = newRob;
    }
    return rob2;
  }
};
