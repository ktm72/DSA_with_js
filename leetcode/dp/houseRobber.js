var rob = function (nums) {
  let rob1 = 0,
    rob2 = 0;
  //[rob1, rob2, n, n+1, ...]
  for (let i = l; i <= r; i++) {
    newRob = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = newRob;
  }
  return rob2;
};
