function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  //keep tracking shortest comb
  let srComb = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remComb = bestSum(remainder, numbers, memo);
    if (remComb !== null) {
      const comb = [...remComb, num]; //we need find the shortest combination
      if (srComb === null || comb.length < srComb.length) {
        srComb = comb;
      }
    }
  }
  memo[targetSum] = srComb;
  return srComb;
}

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 6])); //[6, 2]
console.log(bestSum(8, [1, 4, 5])); //[4,4]
console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]
