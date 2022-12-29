function containsDuplicate(nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cache) {
      return true;
    }
    cache[nums[i]] = true;
  }
  return false;
} //O(k)

function duplicate(nums) {
  const unique = new Set(nums);
  return unique.size !== nums.length;
} // O(1)
module.exports = duplicate;
