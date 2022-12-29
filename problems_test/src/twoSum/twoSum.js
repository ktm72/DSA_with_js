const twoSum = function (target, nums) {
  // true/ false
  const prevValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const neededValue = target - currNum;
    const index2 = prevValues[neededValue];
    if (index2 !== undefined) {
      //   return true;
      return [index2, i];
    } else {
      prevValues[currNum] = i;
    }
  }
  //   return false;
  return [];
};

console.log(twoSum(7, [2, 4])); // false -> []
console.log(twoSum(7, [5, 3, 4, 7])); //true -> [1, 2]
console.log(twoSum(7, [3, 5])); //false -> []
console.log(twoSum(8, [2, 3, 6])); //true -> [0, 2]
console.log(twoSum(300, [7, 14])); //false
