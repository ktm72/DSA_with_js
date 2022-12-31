//circular housing
var rob = function (nums: number[]): number {
  let n: number = nums.length;
  if (n < 2) return n ? nums[0] : 0;
  //break the circle using helper function
  //return the max of 1st(0- 2nd last) or 2nd(1 - last)
  //return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)));
  return Math.max(helper(nums, 0, n - 2), helper(nums, 1, n - 1));
  function helper(nums: number[], start: number, end: number) {
    let rob1: number = 0,
      rob2: number = 0;
    //[rob1, rob2, n, n+1, ...]
    for (let i = start; i <= end; i++) {
      let newRob: number = Math.max(rob1 + nums[i], rob2);
      rob1 = rob2;
      rob2 = newRob;
    }
    return rob2;
  }
};
