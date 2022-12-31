var rob = function (nums: number[]): number {
  let n: number = nums.length;
  if (n < 2) return n ? nums[0] : 0;
  let rob1: number = 0,
    rob2: number = 0;
  //[rob1, rob2, n, n+1, ...]
  for (let i = 0; i <= n; i++) {
    let newRob: number = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = newRob;
  }
  return rob2;
};
