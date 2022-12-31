// function bestSum(targetSum, numbers, memo = {}) {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   //keep tracking shortest comb
//   let srComb = null;
//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remComb = bestSum(remainder, numbers, memo);
//     if (remComb !== null) {
//       const comb = [...remComb, num]; //we need find the shortest combination
//       if (srComb === null || comb.length < srComb.length) {
//         srComb = comb;
//       }
//     }
//   }
//   memo[targetSum] = srComb;
//   return srComb;
// }
function bestSum(targetSum: number, numbers: number[]): number[] {
  if (targetSum === 0) return [];
  const dp: number[][] = new Array(targetSum + 1).fill(null);
  //initialize for 0 is [];
  dp[0] = [];
  for (let i = 0; i < targetSum; i++) {
    if (dp[i] !== null) {
      for (let num of numbers) {
        const comb: number[] = [...dp[i], num];
        //combination length is shorted than the stored arr
        //do operation for the 1st time when it is null
        if (!dp[i + num] || dp[i + num].length > comb.length)
          dp[i + num] = comb;
      }
    }
  }
  return dp[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 6])); //[6, 2]
console.log(bestSum(8, [1, 4, 5])); //[4,4]
console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]
