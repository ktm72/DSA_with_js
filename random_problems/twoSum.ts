function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (diff in map) {
      const prevIdx = map[diff];
      return [prevIdx, i];
    }
    map[diff] = i;
  }
  //never hit
  return [0, 1];
}
