/**
 * climbing a staircase, takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * @param {*} n
 * @returns no of distinct ways to reach the top
 */
function climbStairs(n) {
  //dp, sub Problems tree
  let prevTime = 1, //way
    lastTime = 1;
  //already measured how many ways to reach top lastTime
  for (let i = 1; i < n; i++) {
    temp = lastTime;
    lastTime += prevTime;
    prevTime = temp;
  }
  return lastTime;
}
function climbStairs(n) {
  const dp = new Array(n).fill(0);
  dp[n] = 1;
  dp[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = dp[i + 2] + dp[i + 1];
  }
  return dp[0];
}

console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3
console.log(climbStairs(5)); //8
console.log(climbStairs(6)); //13
