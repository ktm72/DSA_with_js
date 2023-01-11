function sumConstruct(target, nums) {
  const n = nums.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    let sub = [];
    let presum = 0; //prefix sum
    for (let j = i; j < n; j++) {
      presum += nums[j];
      sub.push(nums[j]);
      if (presum === target) {
        result.push(sub);
        sub = [];
        // return result[0];
      }
    }
  }
  return result.length === 0 ? "NO Elements Found" : result; // O(n^2) , O(n*m)
}

function findSubArr(target, nums) {
  let presum = 0;
  let start = 0;
  let end = -1;
  let sumToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    presum += nums[i];
    // If point where sum = (preSum - target) is present,
    // it means that between that point and this, the sum has to equal target
    if (presum - target === 0) {
      start = 0;
      end = i;
      break;
    }
    //if num is in sumToIndex, then we know where we passed that num
    if (sumToIndex.has(presum - target)) {
      //next index subArr starts
      start = sumToIndex.get(presum - target) + 1;
      end = i;
    }
    sumToIndex.set(presum, i);
  }
  return end === -1 ? "NO Elements Found" : nums.slice(start, end + 1);
} // t-> O(n), s-> O(n)

// console.log(sumConstruct(0, [4, 1, 3, -2, -1])); //[3, -2, -1]
// console.log(sumConstruct(0, [-4, 1, 3, -2, -1])); //[-4, 1, 3] or [3, -2, -1]

console.log(findSubArr(0, [4, 1, 3, -2, -1])); //[3, -2, -1]
console.log(findSubArr(0, [-4, 1, 3, -2, -1])); //[-4, 1, 3] or [3, -2, -1]
