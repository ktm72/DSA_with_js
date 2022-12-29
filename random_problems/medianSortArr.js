// function findMedianSortedArrays(nums1, nums2) {
//   //   const nums = [...nums1, ...nums2].sort((a, b) => a - b); //O(n+mlog(n+m))
//   const nums = mergeSort(nums1, nums2); //O(n+m)
//   const len = nums.length;
//   const mid = ~~(len / 2);
//   if (len % 2 !== 0) {
//     return nums[mid];
//   }
//   return (nums[mid - 1] + nums[mid]) / 2; //O(n+mlog(n+m))
// }
// function mergeSort(arr1, arr2) {
//   let combined = [],
//     i = 0,
//     j = 0;
//   const len1 = arr1.length;
//   const len2 = arr2.length;
//   while (i < len1 && j < len2) {
//     if (arr1[i] < arr2[j]) {
//       combined.push(arr1[i]);
//       i++;
//     } else {
//       combined.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < len1) {
//     combined.push(arr1[i]);
//     i++;
//   }
//   while (j < len2) {
//     combined.push(arr2[j]);
//     j++;
//   }
//   return combined;
// }

//binary partition & bitwise operation
function findMedianSortedArrays(nums1, nums2) {
  let x = nums1.length,
    y = nums2.length,
    low = 0,
    high = x;
  //1st arr length must be smaller or equal than 2nd arr
  if (x > y) return findMedianSortedArrays(nums2, nums1);
  while (low <= high) {
    //bitwise, right shift
    //our target is to partition 1st arr(X) and 2nd arr(Y) in a way that
    //fullfill this condition maxLeftX <= minRightY && maxLeftY <= minRightX
    const partitionX = (high + low) >> 1; //without bitwise, Math.floor(h+l)/2
    const partitionY = ((x + y + 1) >> 1) - partitionX; //without bitwise, Math.floor(x+y+1)/2 -pX
    //off bit 0
    const maxX =
      partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const maxY =
      partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const minX =
      partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const minY =
      partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      //we will find median here
      const lowMax = Math.max(maxX, maxY);
      if ((x + y) % 2 == 1) return lowMax;
      return (lowMax + Math.min(minX, minY)) / 2;
    } else if (maxX < minY) {
      //move the pointer right
      low = partitionX + 1;
    } else {
      //move the pointer left
      high = partitionX - 1;
    }
  }
}
console.log(findMedianSortedArrays([1, 3], [5]));
