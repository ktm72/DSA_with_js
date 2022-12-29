function duplicateArr(nums) {
  let unique = {};
  let duplicate = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (unique[nums[i]]) {
      duplicate.push(nums[i]);
    } else {
      unique[nums[i]] = i + 1;
    }
  }
  return duplicate;
  //   const duplicate = nums.filter(
  //     (currVal, currIdx) => nums.indexOf(currVal) !== currIdx
  //   );
  //   return duplicate;
}

console.log(duplicateArr([1, 1, 5, 5, 7, 3, 3]));
