function prefixSum(nums, start, end) {
  const n = nums.length;
  let prefix = []; //contains cumulative sum;
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  return start === 0 ? prefix[end] : prefix[end] - prefix[start - 1];
}

console.log(prefixSum([3, 4, 5, 6, 7, 8], 3, 5)); //21
console.log(prefixSum([3, 4, 5, 6, 7, 8], 1, 3)); // 15
console.log(prefixSum([3, 4, 5, 6, 7, 8], 0, 2)); //12
