var findSubsequences = function (nums) {
  if (nums.length < 2) return [];
  const result = [];
  const path = [];
  const explore = function (startIndex) {
    if (path.length >= 2) {
      result.push([...path]);
    }
    let used = new Set(); // Important, we need to check
    //whether the num has been used on this level to avoid duplicate
    for (let i = startIndex; i < nums.length; i++) {
      if (
        (path.length > 0 && nums[i] < path[path.length - 1]) ||
        used.has(nums[i])
      )
        continue;
      used.add(nums[i]);
      path.push(nums[i]);
      explore(i + 1);
      path.pop();
    }
    return;
  };
  explore(0);
  return result;
};
findSubsequences([4, 4, 3, 2, 1]); //[[4,4]]
findSubsequences([4, 6, 7, 7]); //[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
