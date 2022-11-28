function fixArray(nums) {
  let unique = [...new Set(nums)];
  return unique.sort((a, b) => a - b);
}
console.log(fixArray([3, 26, 1, 23, 2, 3, 44, 57, 87, 1]));
