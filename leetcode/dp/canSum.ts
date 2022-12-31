// const canSum = (
//   targetSum: number,
//   numbers: number[],
//   memo: { [key: string]: boolean } = {}
// ) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;
//   for (let num of numbers) {
//     const remainder: number = targetSum - num;
//     if (canSum(remainder, numbers, memo) === true) {
//       memo[targetSum] = true;
//       return true;
//     }
//   }
//   memo[targetSum] = false;
//   return false;
// };

function canSum(targetSum: number, numbers: number[]): boolean {
  if (targetSum === 0) return true;
  const dp: boolean[] = new Array(targetSum + 1).fill(false);
  //initialize for 0 is true;
  dp[0] = true;
  for (let i = 0; i < targetSum; i++) {
    if (dp[i] === true) {
      for (let num of numbers) {
        dp[i + num] = true;
      }
    }
  }
  return dp[targetSum];
}

console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [3, 5])); //false
console.log(canSum(8, [2, 3, 6])); //true
console.log(canSum(300, [7, 14])); //false
