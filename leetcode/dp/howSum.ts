// function howSum(targetSum, numbers, memo = {}) {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remRes = howSum(remainder, numbers, memo);
//     if (remRes !== null) {
//       memo[targetSum] = [...remRes, num];
//       return memo[targetSum];
//     }
//   }
//   memo[targetSum] = null;
//   return null;
// }
function howSum(targetSum: number, numbers: number[]): number[] {
  if (targetSum === 0) return [];
  const dp: number[][] = new Array(targetSum + 1).fill(null);
  //initialize for 0 is [];
  dp[0] = [];
  for (let i = 0; i < targetSum; i++) {
    if (dp[i] !== null) {
      for (let num of numbers) {
        dp[i + num] = [...dp[i], num];
      }
    }
  }
  return dp[targetSum];
}

console.log(howSum(7, [2, 3])); //[3,2,2]
console.log(howSum(7, [2, 4])); //null
console.log(howSum(7, [5, 3, 4, 7])); //[4,3]
console.log(howSum(7, [3, 5])); //null
console.log(howSum(8, [2, 3, 6])); //[6, 2] or [2,2,2,2]
console.log(howSum(300, [7, 14])); //null
