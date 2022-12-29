function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remRes = howSum(remainder, numbers, memo);
    if (remRes !== null) {
      memo[targetSum] = [...remRes, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum(7, [2, 3])); //[3,2,2]
console.log(howSum(7, [2, 4])); //null
console.log(howSum(7, [5, 3, 4, 7])); //[4,3]
console.log(howSum(7, [3, 5])); //null
console.log(howSum(8, [2, 3, 6])); //[6, 2] or [2,2,2,2]
console.log(howSum(300, [7, 14])); //null
