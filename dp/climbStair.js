function climbStairs(n) {
  //dp, sub Problems tree
  let prevStep = 1,
    lastStep = 1;
  //already measured how many ways can reach lastStep
  for (let i = 0; i < n - 1; i++) {
    temp = prevStep;
    prevStep = lastStep + prevStep;
    lastStep = temp;
  }
  return prevStep;
}
