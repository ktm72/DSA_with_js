function containsDuplicate(nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cache) {
      return true;
    }
    cache[nums[i]] = true;
  }
  return false;
}
