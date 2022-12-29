function mergeArr(nums1, m, nums2, n) {
  //   let len = nums1.length;
  //   let newArr = [];
  //   for (let i = 0; i < len; i++) {
  //     if (nums1[i] === 0) continue;
  //     newArr.push(nums1[i]);
  //   }
  //   return [...newArr, ...nums2].sort((a, b) => a - b);
  // nums1.length = m;
  // nums2.length = n;
  // nums1.push(...nums2);
  // return nums1.sort((a, b) => a - b); //less time
  // nums1.splice(m, n, ...nums2);
  // nums1.sort((a, b) => a - b); //more time than prev
  let i1 = m - 1;
  let i2 = n - 1;

  for (let i = n + m - 1; i >= 0 && i2 >= 0; i--) {
    const num1 = nums1[i1];
    const num2 = nums2[i2];

    if (i1 >= 0 && num1 > num2) {
      nums1[i] = num1;
      i1--;
    } else {
      nums1[i] = num2;
      i2--;
    }
  }
  return nums1.sort((a, b) => a - b); //best
}

console.log(mergeArr([1, 23, 4, 0, 0, 0], 3, [3, 4, 5], 3));
