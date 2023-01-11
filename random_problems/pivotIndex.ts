function pivotIndex(nums: number[]): number {
  const n = nums.length;
  let sum = 0,
    pSum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  for (let i = 0; i < n; i++) {
    let right = sum - pSum;
    //left portions' sum till now
    let left = pSum + nums[i];
    if (left === right) return i;
    pSum = left;
  }
  return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
