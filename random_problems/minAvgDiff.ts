function minimumAverageDifference(nums: number[]): number {
  const n: number = nums.length;
  if (n === 0) return n;
  let min_diff: number = Number.MAX_SAFE_INTEGER;

  let idx: number = 0,
    left: number = 0;
  let total: number = 0;
  for (let i = 0; i < n; i++) {
    total += nums[i];
  }
  // let total = nums.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < nums.length; i++) {
    //sum of first ith
    left += nums[i];
    // sum of last ith
    total -= nums[i];
    let avg: number = 0;
    if (i + 1 == n) {
      avg = Math.abs(~~(left / (i + 1)));
    } else {
      avg = Math.abs(~~(left / (i + 1)) - ~~(total / (nums.length - i - 1)));
    }
    if (avg < min_diff) {
      min_diff = avg;
      idx = i;
    }
  }

  return idx;
}
